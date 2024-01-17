import * as api from './api.js';
import * as localStorage from './localStorage.js';
import { phoneObject } from './phone.js';
export let phoneArr = localStorage.getFromLocalStorage();

// rest of the code
document.querySelector('.phone-select').addEventListener('change', (e) => {
    switch (e.target.value) {
        case '0':
            clearProducts();
            api.fetchProducts();
            break;
        case '1':
            clearProducts();
            api.fetchProducts('samsung');
            break;
        case '2':
            clearProducts();
            api.fetchProducts('iphone');
            break;
    }
});

let clearProducts = () => {
    document.querySelector('.products_list .row').innerHTML = '';
}

window.addToCart = (id, name, price, img, desc) => addToCart(id, name, price, img, desc);
let addToCart = (id, name, price, img, desc) => {
    let existingPhone = phoneArr.find(phone => phone.id === id);
    if (existingPhone) {
        existingPhone.quantity += 1;
    } else {
        let phone = new phoneObject(id, name, price, img, desc, 1); // Assuming phoneObject takes a quantity parameter
        phoneArr.push(phone);
    }
    localStorage.saveToLocalStorage();
    updateCartValue();
    console.log(phoneArr)
}




let updateCartValue = () => {
    console.log(1)
    if (document.querySelector('header #cart .cart-value')) {
        document.querySelector('header #cart .cart-value').remove();
    }
    console.log(phoneArr)
    let totalQuantity = phoneArr.reduce((total, phone) => total + phone.quantity, 0);
    document.querySelector('header #cart').innerHTML += `
                <span class="cart-value">(${totalQuantity})</span>
                `;
}
updateCartValue();