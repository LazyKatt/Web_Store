    // Ví dụ JavaScript cho shop.html
    document.addEventListener('DOMContentLoaded', function() {
        const addToCartButtons = document.querySelectorAll('.cart-btn');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const productInfo = this.closest('.single-product-item');
                const priceText = productInfo.querySelector('.product-price span').nextSibling.textContent.trim();
                const price = priceText.match(/\d+/)[0]; // Sử dụng biểu thức chính quy để chỉ lấy số

                const product = {
                    id: productInfo.dataset.id,
                    name: productInfo.querySelector('.product-name').textContent,
                    price: price, // Sử dụng giá đã được chuyển đổi sang số
                    image: productInfo.querySelector('.product-image img').src,
                    quantity: 1
                };

                addToCart(product);
            });
        });

        function addToCart(product) {
            let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            let existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            // Hiển thị thông báo
            alert(`Đã thêm "${product.name}" vào giỏ hàng.`);
        }
    });