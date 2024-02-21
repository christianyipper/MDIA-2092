// Function to filter products based on selected options
function filterProducts() {
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const condition = document.getElementById('condition').value;

    // Logic to filter products based on color, size, and condition
    // Implement your filtering logic here
}

// Event listener to trigger filtering when options are changed
document.getElementById('color').addEventListener('change', filterProducts);
document.getElementById('size').addEventListener('change', filterProducts);
document.getElementById('condition').addEventListener('change', filterProducts);