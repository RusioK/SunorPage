require('dotenv').config(); // Cargar las variables de entorno
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();

// Middleware de seguridad
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

// Limitar solicitudes para prevenir abuso
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Límite de 100 solicitudes por IP
});
app.use(limiter);

// Configuración de transporte de correo
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // Usa SSL
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false, // Permitir certificados autofirmados
    },
});


// Verificar conexión SMTP
transporter.verify((error, success) => {
    if (error) {
        console.error('Error en la configuración SMTP:', error);
    } else {
        console.log('Servidor SMTP listo para enviar correos');
    }
});

// Ruta para el formulario de contacto
app.post("/api/contact", async (req, res) => {
    const { name, email, empresa, ciudad, telefono, message } = req.body;

    // Validar campos
    if (!name || !email || !empresa || !ciudad || !telefono || !message) {
        return res.status(400).json({
            success: false,
            error: "Todos los campos son obligatorios.",
        });
    }

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.SMTP_USER,
        subject: `Nueva Solicitud de Contacto de ${name}`,
        html: `
        <div style="font-family: 'Arial', sans-serif; font-size: 16px; color: #333; background-color: #f4f4f4; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #ff6600; padding: 15px; border-radius: 10px 10px 0 0; text-align: center; color: #fff;">
                <h2 style="margin: 0; font-size: 24px;">Nueva Solicitud de Contacto</h2>
            </div>
            <div style="background-color: #fff; padding: 20px; border-radius: 0 0 10px 10px;">
                <p style="margin: 0 0 10px;">Hola <strong>Equipo Sunor</strong>,</p>
                <p style="margin: 0 0 20px;">Has recibido una nueva solicitud de contacto de <strong style="color: #ff6600;">${name}</strong> con los siguientes detalles:</p>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px; border: 1px solid #eee;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.8;">
                        <strong>Nombre de la empresa:</strong> <span style="color: #333;">${empresa}</span><br>
                        <strong>Ciudad:</strong> <span style="color: #333;">${ciudad}</span><br>
                        <strong>Teléfono:</strong> <span style="color: #333;">${telefono}</span><br>
                        <strong>Correo:</strong> <a style="color: #ff6600; text-decoration: none;" href="mailto:${email}">${email}</a><br>
                        <strong>Mensaje:</strong> <span style="color: #333;">${message}</span>
                    </p>
                </div>
                <p style="margin: 0 0 20px;">Por favor, responde a <strong style="color: #ff6600;">${name}</strong> lo antes posible para atender esta solicitud.</p>
                <div style="text-align: center; margin-top: 20px;">
                    <a style="display: inline-block; padding: 12px 20px; background-color: #ff6600; color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold;" href="mailto:${email}">Responder al Cliente</a>
                </div>
            </div>
            <footer style="margin-top: 30px; text-align: center; font-size: 14px; color: #888;">
                <p style="margin: 0;">Saludos cordiales, <strong>Equipo Sunor</strong></p>
            </footer>
        </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            success: true,
            message: "Mensaje enviado con éxito.",
        });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({
            success: false,
            error: "No se pudo enviar el mensaje. Intenta más tarde.",
        });
    }
});

// Ruta para el formulario de cotizaciones
app.post("/api/cotizar", async (req, res) => {
    const { fromName, messageId, productName, message } = req.body;

    if (!fromName || !messageId || !productName || !message) {
        return res.status(400).json({
            success: false,
            error: "Todos los campos son obligatorios.",
        });
    }

    const mailOptions = {
        from: `"${fromName}" <${messageId}>`,
        to: process.env.SMTP_USER,
        subject: `Solicitud de Cotización - ${productName}`,
        html: `
            <h2>Nueva solicitud de cotización</h2>
            <p><strong>Nombre:</strong> ${fromName}</p>
            <p><strong>Correo:</strong> ${messageId}</p>
            <p><strong>Producto:</strong> ${productName}</p>
            <p><strong>Mensaje:</strong><br>${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            success: true,
            message: "Cotización enviada exitosamente.",
        });
    } catch (error) {
        console.error('Error al enviar cotización:', error);
        res.status(500).json({
            success: false,
            error: "No se pudo enviar la cotización. Intenta más tarde.",
        });
    }
});

// Ruta de verificación de salud
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
    });
});

// Manejador global de errores
app.use((err, req, res, next) => {
    console.error('Error global:', err);
    res.status(500).json({
        success: false,
        error: "Error interno del servidor.",
    });
});

// Inicializar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`Verificación de salud: http://localhost:${PORT}/health`);
});
