const api_url = 'https://6597f70f668d248edf23ce4d.mockapi.io/api/v1/products';
const path = {
    index: '/index.html',
    cart: '/customer/view/cart.html',
    admin: '/admin.html'
}
export let fetchProducts = (brand = '') => {
    axios({
        url: api_url,
        method: 'GET',
        params: {
            type: brand
        }
    })
        .then(res => {

            if (window.location.pathname == path.index) {
                renderProducts(res.data);

            }
            else if (window.location.pathname == path.cart) {
                // 
            }
        })
        .catch(res => {
            alert('Đã có lỗi xảy ra');
        })

}
fetchProducts();
export let renderProducts = (data) => {
    data.forEach(element => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('item', 'col-12', 'col-md-6', 'col-lg-4', 'col-xl-3');
        itemElement.innerHTML = `
        <div class="item-image">
            <img src="${element.img}" alt="">
        </div>
        <div class="item-desc">
            <h3 class="item-name">${element.name}</h2>
            <p class="item-desc">${element.desc}<br>
            Màn hình kích thước ${element.screen}<br> Camera trước ${element.frontCamera}, Camera sau ${element.backCamera} bắt trọn khoảnh khắc</p>
            
        </div >
    <div class="item-footer">
        <p class="item-price">${element.price}$</p>
        <button onclick="addToCart('${element.id}', '${element.name}', '${element.price}', '${element.img}', '${element.desc}')" class="action-btn">Thêm vào giỏ hàng</button>
    </div>

`;
        document.querySelector('.products_list .row').appendChild(itemElement);
    });
}

