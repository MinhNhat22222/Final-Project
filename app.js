var cart = document.getElementById('cart');
var cartButton = document.getElementById('cart-button');

cartButton.addEventListener('click', function() {
    if (cart.style.display === 'none') {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }
});
document.getElementById('search').addEventListener('input', function(e) {
    var searchValue = e.target.value.toLowerCase();
    var products = document.getElementsByClassName('product');
    for (var i = 0; i < products.length; i++) {
        var productTitle = products[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        if (productTitle.includes(searchValue)) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
});



// Lấy danh sách tất cả các nút "Thêm vào giỏ hàng"
var addToCartButtons = document.querySelectorAll('.product button');

// Duyệt qua từng nút và thêm sự kiện 'click'
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Lấy tên sản phẩm từ thẻ h2 của sản phẩm
        var productTitle = this.parentElement.getElementsByTagName('h2')[0].innerText;

        // Tạo một phần tử p mới cho sản phẩm trong giỏ hàng
        var cartItem = document.createElement('p');
        cartItem.innerText = productTitle;

        // Thêm sản phẩm vào giỏ hàng
        document.getElementById('cart').appendChild(cartItem);
    });
});

var element = document.getElementById('your-element-id');
element.addEventListener('mouseover', function() {
    this.classList.add('blink');
});
element.addEventListener('mouseout', function() {
    this.classList.remove('blink');
});
