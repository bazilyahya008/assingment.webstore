// Simple Cart Counter
let cartCount = 0;

// Sab buttons select kar lo
const buttons = document.querySelectorAll('button');

// Cart icon select karo
const cartIcon = document.querySelector('.cart');

// Har button ke liye click event lagao
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++; // counter badhao
        cartIcon.textContent = `🛒 ${cartCount}`; // cart me number dikhao
        alert('Added to cart!');
    });
});
