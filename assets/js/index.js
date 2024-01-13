document.querySelector('.phone-select').addEventListener('change', (e) => {
    switch (e.target.value) {
        case '0':
            clearProducts();
            fetchProducts();
            break;
        case '1':
            clearProducts();
            fetchProducts('samsung');
            break;
        case '2':
            clearProducts();
            fetchProducts('iphone');
            break;
    }
});

let clearProducts = () => {
    document.querySelector('.products_list .row').innerHTML = '';
}

let phoneArr = [];
let addToCart = (id, name, price, desc) => {
    let phone = new phoneObject(id, name, price, desc);
    phoneArr.push(phone);
    saveToLocalStorage();
    updateCartValue();
}


let saveToLocalStorage = () => {
    localStorage.setItem('phoneArr', JSON.stringify(phoneArr));
}

let getFromLocalStorage = () => {
    if (localStorage.getItem('phoneArr')) {
        phoneArr = JSON.parse(localStorage.getItem('phoneArr'));
    }
}
getFromLocalStorage();
let updateCartValue = () => {
    if (document.querySelector('header #cart .cart-value')) {
        document.querySelector('header #cart .cart-value').remove();
    }
    document.querySelector('header #cart').innerHTML += `
        <span class="cart-value">(${phoneArr.length})</span>
    `;
}
updateCartValue();