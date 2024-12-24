// main.js

// Function to filter products based on selected criteria
function filterProducts() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        if (productName.includes(filterValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Function to add an item to the cart
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[productId] = (cart[productId] || 0) + 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

// Function to update cart items
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    for (const [productId, quantity] of Object.entries(cart)) {
        const productElement = document.createElement('div');
        productElement.textContent = `Product ID: ${productId}, Quantity: ${quantity}`;
        cartItemsContainer.appendChild(productElement);
    }
}

// Function to handle form submission in the contact page
function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the data to a server
    alert(`Thank you, ${name}! Your message has been sent.`);
}

// Event listeners
document.getElementById('filter').addEventListener('input', filterProducts);
document.getElementById('contact-form').addEventListener('submit', handleContactForm);

// Initialize cart on page load
updateCart();