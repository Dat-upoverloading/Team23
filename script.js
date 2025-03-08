document.addEventListener("DOMContentLoaded", function() {
    // Xử lý hiển thị chi tiết sản phẩm
    if (window.location.pathname.includes("product.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get("id");

        const products = {
            1: { name: "Android Tivi Sony 49 inch 4K", price: "8.000.000đ", image: "public/tv1.jpg" },
            2: { name: "Tivi LED LG 43 inch", price: "4.300.000đ", image: "public/tv2.jpg" }
        };

        if (products[productId]) {
            document.getElementById("product-name").textContent = products[productId].name;
            document.getElementById("product-price").textContent = products[productId].price;
            document.getElementById("product-image").src = products[productId].image;
        }
    }

    // Thêm sản phẩm vào giỏ hàng
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let product = {
                id: this.getAttribute("data-id"),
                name: this.getAttribute("data-name"),
                price: this.getAttribute("data-price"),
                image: this.getAttribute("data-image")
            };

            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        });
    });

    // Cập nhật số lượng giỏ hàng
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        document.getElementById("cart-count").textContent = cart.length;
    }

    updateCartCount();
});
