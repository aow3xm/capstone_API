

export let renderPhoneList = (phoneArr) => {
    let contentHTML = '';
    phoneArr.reverse().forEach((item) => {
        let trString = `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><img src="${item.img}" alt="Product Image" style="max-width: 100px; max-height: 100px;"></td>
                <td>${item.desc}</td>

                <td>
                <button onclick="deletePhone(${item.id
            })" class= "btn btn-danger">Delete</button>
            
                    <button class="btn btn-primary" onclick="getDetailPhone(${item.id
            })">Sửa</button>
                </td>
            </tr>
        `;
        contentHTML += trString;
    });
    document.getElementById('tablePhone').innerHTML = contentHTML;
};

export let onSuccess = (message) => {
    Swal.fire({
        title: message,
        text: 'You clicked the button!',
        icon: 'success',
    });
};
export let getDataPhoneForm = () => {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let desc = document.getElementById('desc').value;
    let img = document.getElementById('img').value;
    let frontCamera = document.getElementById('frontCamera').value;
    let backCamera = document.getElementById('backCamera').value;
    let screen = document.getElementById('screen').value;
    let phone = {
        name,
        price,
        desc,
        img,
        frontCamera,
        backCamera,
        screen,
    };
    return phone;
};
export let showInfoPhone = (dataPhone) => {
    console.log('dataPhone: ', dataPhone);
    document.getElementById('id').value = dataPhone.id;
    document.getElementById('name').value = dataPhone.name;
    document.getElementById('price').value = dataPhone.price;
    document.getElementById('desc').value = dataPhone.desc;
    document.getElementById('img').value = dataPhone.img;

};