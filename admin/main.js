import { getDataPhoneForm, renderPhoneList, } from "./modal/controller.js";
import phoneService from "./modal/service.js";

const fectPhoneList = () => {
    phoneService
        .getPhoneListApi()
        .then((res) => {
            // console.log('res',res);
            renderPhoneList(res.data)
        })
        .catch((err) => {
            console.log('err', err);
        })
}
fectPhoneList()
//-----------DELETE--------

let deletePhone = (id) => {
    phoneService
        .deletePhoneApi(id)
        .then((res) => {
            // console.log('res',res);
            fectPhoneList();
            onSuccess('Xoá thành công');
        })
        .catch((err) => {
            console.log('err', err);
        })
}
window.deletePhone = deletePhone;

// -------TẠO MỚI---------
let createPhone = () => {
    phoneService
        .createPhoneApi(dataPhone)
        .then((res) => {
            // console.log('res',res);
            getDataPhoneForm()
            onSuccess('Thêm thành công');
            
        })
        .catch((err) => {
            console.log('err', err);
        })
}
 
window.createPhone = createPhone;