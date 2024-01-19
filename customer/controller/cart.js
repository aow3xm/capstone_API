import * as localStorage from '../services/localStorage.js';
let phoneArr = localStorage.getFromLocalStorage();
phoneArr.forEach((element, index) => {
    let item = document.createElement('div');
    item.classList.add('item', `item${index}`);
    item.innerHTML = `
    <div class="item-image">
              <img src="${element.img}" alt="" />
            </div>
            <div class="item-desc">
              <h3 class="item-name">${element.name}</h3>
              <p class="item-desc-p">${element.desc}
              </p>
              <p class="item-price">${element.price * element.quantity}$</p>
              <div class="item-quantity">
                <button onclick="subItem('${element.id}','${index}')" class="btn-back">-</button>
                <input type="number" name="" id="" placeholder="${element.quantity}" />
                <button onclick="addItem('${element.id}','${index}')" class="btn-pre">+</button>
              <button onclick="removeItem('${index}')" class="btn-remove">Xóa</button>
                </div>
            </div>
            `;
    document.querySelector('.items_list').appendChild(item);
});
window.subItem = (id, index) => subItem(id, index);
window.addItem = (id, index) => addItem(id, index);
window.removeItem = (index) => removeItem(index);
let subItem = (id, index) => {
    phoneArr.forEach((element) => {

        if (element.id == id) {

            if (element.quantity <= 1) {
                removeItem(index);
            }
            else {
                element.quantity *= 1;
                element.quantity -= 1;
                updateInputValue(index);

            }
            updateTotalValue(index);
        }
    })
}
let addItem = (id, index) => {
    phoneArr.forEach((element) => {

        if (element.id == id) {
            element.quantity *= 1;

            (element.quantity) += 1;
            updateInputValue(index);
            updateTotalValue(index);
        }
    })

}

let removeItem = (index) => {
    document.querySelector(`.item${index}`).remove();
    localStorage.removeItemFromLocalStorage(index);
    phoneArr.splice(index, 1);
    updateTotalValue();

}


let updateInputValue = (itemIndex) => {
    let inputElement = document.querySelector(`.item${itemIndex} .item-quantity input`);
    inputElement.value = phoneArr[itemIndex].quantity;

    document.querySelector(`.item${itemIndex} .item-price`).innerHTML = `${phoneArr[itemIndex].price * phoneArr[itemIndex].quantity}$`;
    localStorage.saveToLocalStorage();
}

let totalRender = () => {
    let total = phoneArr.reduce((total, phone) => total + phone.price * phone.quantity, 0);
    document.querySelector('.total_content').innerHTML = `
    
    <h3 class="total">Thanh toán: ${total}$</h3>
    <button>Thanh toán</button>
    `;

}

totalRender();

let updateTotalValue = () => {
    let total = phoneArr.reduce((total, phone) => total + phone.price * phone.quantity, 0);
    document.querySelector('.total_content h3.total').innerHTML = `Thanh toán: ${total}$`;
}
