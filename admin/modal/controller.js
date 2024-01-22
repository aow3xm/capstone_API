

export let renderPhoneList = (phoneArr) => {
    // console.log(phoneArr);
    let contentHTML = ''
    phoneArr.forEach((item) => {
        let trString = `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>'${item.img}</td>
                <td>${item.desc}</td>

                <td>
                <button onlick="deletePhone(${item.id})"  class ="btn btn-danger" > Delete</button>
                <button class = "btn btn-primary" > Sửa </button> </td>
            </tr>
            `;
        contentHTML += trString;
    });
    document.getElementById('tablePhone').innerHTML = contentHTML
}
export let onSuccess = (message) => {
    Swal.fire({
        title: message,
        text: 'You clicked the button!',
        icon: 'success',
    });
};
export let getDataPhoneForm = () => {
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let desc = document.getElementById('desc').value;
    let img = document.getElementById('img').value;

    let phone = {
        id,
        name,
        price,
        desc,
        img,
    }
    return phone;
}