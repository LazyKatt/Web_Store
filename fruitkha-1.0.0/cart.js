document.addEventListener('DOMContentLoaded', function() {
    const cartTableBody = document.querySelector('.cart-table tbody');
    const totalSection = document.querySelector('.total-section tbody');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;

    function updateCartUI() {
        cartTableBody.innerHTML = ''; // Xóa các hàng hiện tại
        cart.forEach((product, index) => {
            const total = product.quantity * parseFloat(product.price.replace('$', ''));
            subtotal += total;
            const row = `
                <tr class="table-body-row">
                    <td class="product-remove"><a href="#" onclick="removeFromCart(${index})"><i class="far fa-window-close"></i></a></td>
                    <td class="product-image"><img src="${product.image}" alt="${product.name}"></td>
                    <td class="product-name">${product.name}</td>
                    <td class="product-price">${product.price}</td>
                    <td class="product-quantity"><input type="number" value="${product.quantity}" onchange="updateQuantity(${index}, this.value)"></td>
                    <td class="product-total">$${total.toFixed(2)}</td>
                </tr>
            `;
            cartTableBody.innerHTML += row;
        });

        // Cập nhật tổng kết giỏ hàng
        const shipping = subtotal > 0 ? 45 : 0; // Giả sử phí vận chuyển cố định là $45
        const total = subtotal + shipping;
        totalSection.innerHTML = `
            <tr class="total-data">
                <td><strong>Subtotal: </strong></td>
                <td>$${subtotal.toFixed(2)}</td>
            </tr>
            <tr class="total-data">
                <td><strong>Shipping: </strong></td>
                <td>$${shipping.toFixed(2)}</td>
            </tr>
            <tr class="total-data">
                <td><strong>Total: </strong></td>
                <td>$${total.toFixed(2)}</td>
            </tr>
        `;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI(); // Cập nhật lại UI
    }

    function updateQuantity(index, quantity) {
        cart[index].quantity = parseInt(quantity, 10);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI(); // Cập nhật lại UI
    }

    window.removeFromCart = removeFromCart;
    window.updateQuantity = updateQuantity;

    updateCartUI();
});