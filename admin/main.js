import { getDataPhoneForm, renderPhoneList, showInfoPhone, } from "./modal/controller.js";
import phoneService from "./modal/service.js";

const fectPhoneList = () => {
    phoneService
        .getPhoneListApi()
        .then((res) => {
            renderPhoneList(res.data);
        })
        .catch((err) => {
            console.error('Error fetching phone list:', err);
        });
};

fectPhoneList();
 //-------------DELETE--------------

let deletePhone = (id) => {
    phoneService
        .deletePhoneApi(id)
        .then((res) => {
            fectPhoneList();
            onSuccess('Xoá thành công');
        })
        .catch((err) => {
            console.error('Error deleting phone:', err);
        });
};
 

window.deletePhone = deletePhone;

// -------TẠO MỚI---------
let createPhone = () => {
    let  dataPhone = getDataPhoneForm()
    phoneService
        .createPhoneApi(dataPhone)
        .then((res) => {
            // console.log('res',res);
            fectPhoneList()
            onSuccess('Thêm thành công');
            $('#exampleModal').modal('hide');
    
        })
        .catch((err) => {
            console.error('Không thể tạo thôn tin mới:', err);
        })
}
 
window.createPhone = createPhone;

//-------------GET (id) SỬA TỪNG ID-------------
let getDetailPhone = (id) => {
    phoneService
    .getDetailPhoneApi(id)
    .then((res) => {
      //   console.log('res: ', res);
      showInfoPhone(res.data);
      //   Ấn sửa thì hiện modal
      $('#exampleModal').modal('show');
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};
window.getDetailPhone = getDetailPhone;

//--------update-cập nhật--------------
let updatePhone = () => {
    // lấy thông tin từ form
    let dataPhone = getDataPhoneForm()
    phoneService
    .updatePhoneApi(dataPhone)
    .then ((res) => {
           fectPhoneList() 
           $('#exampleModal').modal('hide');

    })
    .catch((err) => {
        console.log(err);
    }
        )
}
window.updatePhone = updatePhone