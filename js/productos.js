// Lista de productos con URLs de imágenes públicas
console.log('Productos.js loaded');

//Productos
const products = [

      /*Climatizacion_Industrial*/
    {
        id: 1,
        name: 'Chiller ',
        category: 'climatizacion_Industrial',
        description: 'El equipo “chiller” es un sistema de enfriamiento de alta capacidad, ideal para aplicaciones comerciales, industriales y edificios de gran envergadura que requieren control de temperatura eficiente y constante, como fábricas, hospitales, hoteles y centros comerciales. Funcionando mediante un circuito de agua fría que circula a través de intercambiadores de calor, el chiller distribuye aire acondicionado de forma uniforme, permitiendo mantener un clima óptimo en amplias áreas o procesos industriales.',
        image: 'images/productos/FullPOWER-VFD-TCAITZ-2565-768x768.png',
        marca: ['images/marcas/ANWO.png','images/marcas/rhoss-logo.jpg']
    },
    {
        id: 2,
        name: 'VRV/VRF',
        category: 'climatizacion_Industrial',
        description: 'El sistema de aire acondicionado VRV/VRF (Variable Refrigerant Volume/Flow) es una solución avanzada diseñada para edificios comerciales y residenciales de gran tamaño que requieren un control preciso y zonificado de la temperatura. Este sistema permite ajustar el flujo de refrigerante en cada unidad interior de manera independiente, ofreciendo una climatización personalizada en múltiples áreas simultáneamente. Su eficiencia energética y flexibilidad lo convierten en la opción ideal para oficinas, hoteles, hospitales y complejos residenciales que necesitan un control inteligente y adaptable de la climatización.',
        image: 'images/productos/VRV_VRF.png',
        marca: ['images/marcas/LG-Logo.png', 'images/marcas/Samsung.png']
    },
    {
        id: 3,
        name: 'Precision',
        category: 'climatizacion_Industrial',
        description: 'Los equipos de climatización de precisión están diseñados para mantener condiciones exactas de temperatura, humedad y calidad del aire en entornos críticos donde incluso pequeñas variaciones pueden afectar operaciones sensibles. Son ideales para centros de datos, laboratorios, hospitales, museos y salas blancas en industrias como la farmacéutica y la microelectrónica. Estos sistemas de precisión garantizan un control continuo y preciso, protegiendo equipos, materiales o productos que requieren estabilidad ambiental rigurosa.',
        image: 'images/productos/precision.jpg',
        marca: ['images/marcas/Mitsubishi_Electric_logo.svg.png']
    },

    /*Climatizacion_Comercial*/
    {
        id: 4,
        name: 'Cassete',
        category: 'climatizacion_Comercial',
        description: 'El aire acondicionado tipo cassette es una solución moderna y eficiente, ideal para oficinas, tiendas, restaurantes y otros espacios comerciales. Diseñado para instalarse en el techo, este equipo distribuye el aire de manera uniforme en todas las direcciones, proporcionando un confort óptimo sin ocupar espacio en las paredes. Su diseño discreto y funcional permite integrarlo fácilmente en el ambiente, asegurando un enfriamiento efectivo y una apariencia limpia y profesional..',
        image: 'images/productos/cassete.avif',
        marca: ['images/marcas/ANWO.png', 'images/marcas/CLARK.jpg', 'images/marcas/LOGO-Khone NEGRO.png']
    },
    {
        id: 5,
        name: 'Roof Top',
        category: 'climatizacion_Comercial',
        description: 'El equipo Roof Top es un sistema de climatización versátil y eficiente, diseñado especialmente para espacios comerciales e industriales de gran tamaño, como centros comerciales, almacenes, oficinas y fábricas. Instalado en el techo del edificio, el Roof Top optimiza el espacio interior y permite una distribución uniforme del aire, garantizando confort térmico en áreas extensas..',
        image: 'images/productos/roof_top.jpg',
        marca: ['images/marcas/ANWO.png', 'images/marcas/York.webp']
    },
    {
        id: 6,
        name: 'Split Ducto',
        category: 'climatizacion_Comercial',
        description: 'El aire acondicionado tipo Split Ducto es ideal para quienes buscan un sistema de climatización discreto y eficiente en grandes espacios, como oficinas, tiendas o residencias de lujo. Este equipo distribuye el aire a través de ductos ocultos, manteniendo el ambiente climatizado de manera uniforme sin afectar la estética del espacio. Su diseño silencioso y potente garantiza un confort óptimo en varias áreas al mismo tiempo, adaptándose a las necesidades de climatización integral de cada proyecto.',
        image: 'images/productos/split_ducto.avif',
        marca: ['images/marcas/ANWO.png', 'images/marcas/CLARK.jpg', 'images/marcas/LOGO-Khone NEGRO.png']
    },
    {
        id: 7,
        name: 'Piso Cielo',
        category: 'climatizacion_Comercial',
        description: 'El aire acondicionado tipo Piso Cielo es una opción versátil y eficiente para climatizar espacios comerciales y de alto tránsito, como salones, tiendas, restaurantes y oficinas. Este equipo puede instalarse tanto en el piso como en el techo, adaptándose a las características del lugar y brindando una distribución de aire potente y uniforme. Su diseño optimiza el espacio y proporciona un confort constante, siendo una solución práctica para áreas amplias que requieren una climatización confiable.',
        image: 'images/productos/piso_cielo.png',
        marca: ['images/marcas/ANWO.png', 'images/marcas/CLARK.jpg', 'images/marcas/LOGO-Khone NEGRO.png']
    },

    /*Climatizacion_residencial*/
    {
        id: 8,
        name: 'Split Muro',
        category: 'climatizacion_Residencial',
        description: 'El equipo de aire acondicionado tipo Split Muro es una solución práctica y eficiente para climatizar espacios pequeños y medianos, como hogares oficinas y locales comerciales. Su diseño compacto y de fácil instalación permite integrarlo en interiores sin afectar la estética del ambiente, ofreciendo una climatización silenciosa y controlada.  Los equipos Split Muro son ideales para quienes buscan confort y rendimiento en la climatización diaria de sus espacios personales o comerciales. ',
        image: 'images/productos/split_muro.png',
        marca: ['images/marcas/ANWO.png', 'images/marcas/CLARK.jpg', 'images/marcas/LOGO-Khone NEGRO.png']
    },
    {
        id: 9,
        name: 'Ventana',
        category: 'climatizacion_Residencial',
        description: 'El aire acondicionado tipo ventana es una solución compacta y económica para climatizar habitaciones, oficinas pequeñas o áreas comerciales de dimensiones reducidas. Con un diseño integrado en una sola unidad, este equipo se instala fácilmente en ventanas o muros, ofreciendo una distribución directa del aire sin necesidad de sistemas de ductos. Su funcionalidad simple y rendimiento eficiente lo convierten en una opción práctica para quienes buscan confort básico y un control sencillo de la temperatura. Los equipos de ventana son ideales para espacios donde se necesita una climatización confiable y de rápida instalación.',
        image: 'images/productos/ventana.png',
        marca: ['images/marcas/ANWO.png', 'images/marcas/CLARK.jpg']
    },
    {
        id: 10,
        name: 'Portatil',
        category: 'climatizacion_Residencial',
        description: 'El aire acondicionado tipo ventana es una solución práctica y asequible para climatizar habitaciones, oficinas pequeñas o locales comerciales de tamaño reducido. Con un diseño compacto en una sola unidad, se instala fácilmente en una ventana o en el muro, ofreciendo una distribución directa y eficiente del aire. Ideal para quienes buscan confort y frescura en espacios pequeños sin complicaciones de instalación.',
        image: 'images/productos/portatil.png',
        marca: ['images/marcas/ANWO.png', 'images/marcas/CLARK.jpg']     
    }


];

// Configuración de la paginación
const itemsPerPage = 6; // Número de productos por página
let currentCategory = 'all';
let currentPage = 1;

// Verificar elementos del DOM
console.log('product-list exists:', !!document.getElementById('product-list'));
console.log('pagination exists:', !!document.getElementById('pagination'));

// Filtrar productos por categoría
function filterProducts(category) {
    console.log('Filtering products by category:', category);
    currentCategory = category;
    currentPage = 1; // Resetear a la primera página
    renderProducts();
    renderPagination();
    updateActiveCategory(category); // Actualizar la clase activa
}
function updateActiveCategory(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        const categoryValue = button.getAttribute('data-category');
        if (categoryValue === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

//Rende
function renderProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error('Elemento con ID "product-list" no encontrado.');
        return;
    }
    productList.innerHTML = '';

    const filteredProducts = products.filter(product => currentCategory === 'all' || product.category === currentCategory);
    console.log('Filtered products:', filteredProducts);

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);

    paginatedProducts.forEach(product => {
        const productHTML = `
            <div class="col-md-4 col-sm-6 product-item">
                <div class="product-card">
                    <h3 class="product-title">${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <button class="modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                            data-bs-whatever="${product.name}" 
                            data-bs-description="${product.description}"
                            data-bs-image="${product.image}"
                            data-bs-marca='${JSON.stringify(product.marca)}'>Ver más</button>
                </div>
            </div>`;
        productList.insertAdjacentHTML('beforeend', productHTML);
    });
    
    if (paginatedProducts.length === 0) {
        productList.innerHTML = '<p class="text-center">No hay productos disponibles en esta categoría.</p>';
    }
}




// Renderizar paginación
function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) {
        console.error('Elemento con ID "pagination" no encontrado.');
        return;
    }
    pagination.innerHTML = '';

    // Filtrar productos por categoría
    const filteredProducts = products.filter(product => currentCategory === 'all' || product.category === currentCategory);

    // Calcular número de páginas
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Crear botones de paginación
    for (let i = 1; i <= totalPages; i++) {
        const paginationBtn = `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>
        `;
        pagination.insertAdjacentHTML('beforeend', paginationBtn);
    }
}

// Cambiar de página
function goToPage(page) {
    console.log('Going to page:', page);
    currentPage = page;
    renderProducts();
    renderPagination();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded');
    filterProducts('all');
});

document.addEventListener('DOMContentLoaded', function () {
    const exampleModal = document.getElementById('exampleModal');
    const productNameElement = document.getElementById('productName');
    const productDescriptionElement = document.getElementById('productDescription');
    const productImageElement = document.getElementById('productImage');
    const productMarcasContainer = document.getElementById('productMarcas'); // Contenedor para las marcas

    if (exampleModal) {
        exampleModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            if (button) {
                const productName = button.getAttribute('data-bs-whatever');
                const productDescription = button.getAttribute('data-bs-description');
                const productImage = button.getAttribute('data-bs-image');
                const productMarcas = JSON.parse(button.getAttribute('data-bs-marca')); // Convertir la lista de marcas

                if (productNameElement) productNameElement.textContent = productName;
                if (productDescriptionElement) productDescriptionElement.textContent = productDescription;
                if (productImageElement) {
                    productImageElement.src = productImage;
                    productImageElement.alt = productName;
                }
                if (productMarcasContainer) {
                    productMarcasContainer.innerHTML = ''; // Limpiar marcas previas
                    productMarcas.forEach(marca => {
                        const img = document.createElement('img');
                        img.src = marca;
                        img.alt = `Logo de la marca ${productName}`;
                        img.classList.add('brand-logo');
                        productMarcasContainer.appendChild(img);
                    });
                }
            }
        });
    }
});


// Detectar categoría desde la URL al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category'); // Obtener el parámetro 'category'

    if (category) {
        filterProducts(category); // Aplicar filtro automáticamente si hay categoría
    } else {
        filterProducts('all'); // Mostrar todos los productos si no hay categoría
    }
});
