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
 

// let createPhone = () => {
//     let  dataPhone = getDataPhoneForm()


//   // Check for empty values before proceeding
//   if (!checkEmptyValue(dataPhone.id, "tbid") ||
//       !checkEmptyValue(dataPhone.name, "tbname") ||
//       !checkEmptyValue(dataPhone.price, "tbprice") ||
//       !checkEmptyValue(dataPhone.desc, "tbdesc") ||
//       !checkEmptyValue(dataPhone.img, "tbimg")) {
//     return; // Prevent form submission if any fields are empty
//   }

//     phoneService
//         .createPhoneApi(dataPhone)  
//         .then((res) => {
//             // console.log('res',res);
//             fectPhoneList()
//             onSuccess('Thêm thành công');
//             $('#exampleModal').modal('hide');
//             document.getElementById('formPhone').reset();
//         })
//         .catch((err) => {
//             console.error('Không thể tạo thông tin mới:', err);
//         })
// }
 
// window.createPhone = createPhone;
//---------tạo mới kèm validation--------
let createPhone = () => {
    let dataPhone = getDataPhoneForm();
 

 
    
        phoneService
            .createPhoneApi(dataPhone)
            .then((res) => {
                fectPhoneList();
                validateForm()
                onSuccess('Thêm thành công');
                $('#exampleModal').modal('hide');
                document.getElementById('formPhone').reset();
            })
            .catch((err) => {
                console.error('Không được bỏ trống', err);
            });
    
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