let phoneArr = getFromLocalStorage();
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


let addToCart = (id, name, price, img, desc) => {
    let existingPhone = phoneArr.find(phone => phone.id === id);
    if (existingPhone) {
        // If phone already exists in the cart, increment its quantity
        existingPhone.quantity += 1;
    } else {
        // If phone doesn't exist in the cart, add a new item
        let phone = new phoneObject(id, name, price, img, desc, 1); // Assuming phoneObject takes a quantity parameter
        phoneArr.push(phone);
    }
    saveToLocalStorage();
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