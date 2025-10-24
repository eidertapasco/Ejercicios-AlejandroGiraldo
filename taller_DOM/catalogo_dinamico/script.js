// Array de productos
const productos = [
    { id: 1, nombre: "Laptop Gaming", precio: 1299.99, imagen: "💻" },
    { id: 2, nombre: "Mouse Inalámbrico", precio: 29.99, imagen: "🖱️" },
    { id: 3, nombre: "Teclado Mecánico", precio: 89.99, imagen: "⌨️" },
    { id: 4, nombre: "Monitor 4K", precio: 449.99, imagen: "🖥️" },
    { id: 5, nombre: "Auriculares Bluetooth", precio: 79.99, imagen: "🎧" },
    { id: 6, nombre: "Webcam HD", precio: 59.99, imagen: "📹" },
    { id: 7, nombre: "Micrófono USB", precio: 99.99, imagen: "🎤" },
    { id: 8, nombre: "Silla Gaming", precio: 299.99, imagen: "🪑" },
];

// Variables globales
let cartCount = 0;
let currentProducts = [...productos];

// Selección de elementos
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const cartCountDisplay = document.getElementById('cartCount');
const noResultsMsg = document.getElementById('noResults');

// Event Listeners
searchInput.addEventListener('input', filterProducts);

// Inicializar la aplicación
renderProducts(productos);

// Función para renderizar productos
function renderProducts(productsArray) {
    // Limpiar grid
    productGrid.innerHTML = '';
    
    // Verificar si hay productos
    if (productsArray.length === 0) {
        noResultsMsg.textContent = 'No se encontraron productos que coincidan con tu búsqueda.';
        return;
    } else {
        noResultsMsg.textContent = '';
    }
    
    // Crear tarjetas de productos
    productsArray.forEach(producto => {
        const card = createProductCard(producto);
        productGrid.appendChild(card);
    });
}

// Función para crear tarjeta de producto
function createProductCard(producto) {
    // Crear elementos
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'product-image';
    imageDiv.textContent = producto.imagen;
    
    const info = document.createElement('div');
    info.className = 'product-info';
    
    const name = document.createElement('h3');
    name.className = 'product-name';
    name.textContent = producto.nombre;
    
    const price = document.createElement('p');
    price.className = 'product-price';
    price.textContent = `$${producto.precio.toFixed(2)}`;
    
    const button = document.createElement('button');
    button.className = 'add-to-cart-btn';
    button.textContent = 'Agregar al Carrito';
    button.addEventListener('click', () => addToCart(producto));
    
    // Ensamblar tarjeta
    info.appendChild(name);
    info.appendChild(price);
    info.appendChild(button);
    
    card.appendChild(imageDiv);
    card.appendChild(info);
    
    return card;
}

// Función para agregar al carrito
function addToCart(producto) {
    cartCount++;
    updateCartDisplay();
    
    // Animación visual (opcional)
    const btn = event.target;
    btn.textContent = '✓ Agregado';
    btn.style.background = '#27ae60';
    
    setTimeout(() => {
        btn.textContent = 'Agregar al Carrito';
        btn.style.background = '#667eea';
    }, 1000);
}

// Función para actualizar display del carrito
function updateCartDisplay() {
    cartCountDisplay.textContent = cartCount;
}

// Función para filtrar productos
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const filteredProducts = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(searchTerm)
    );
    
    currentProducts = filteredProducts;
    renderProducts(filteredProducts);
}