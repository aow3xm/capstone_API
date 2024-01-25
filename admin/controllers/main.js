

import { getDataPhoneForm, renderPhoneList, showInfoPhone, } from "../controllers/controller.js";
import phoneService from "../controllers/service.js";
import { onSuccess, onFail, resetForm } from "../controllers/controller.js";

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
            onSuccess('Xoá thành công')
        })
        .catch((err) => {
            console.error('Error deleting phone:', err);

        });
};


window.deletePhone = deletePhone;

// -------TẠO MỚI---------

let createPhone = () => {
    // Lấy dữ liệu từ form
    let dataPhone = getDataPhoneForm();

    if (!isValidPhoneData(dataPhone)) {
        // Hiển thị thông báo lỗi bằng hàm onFail
        onFail('Hãy nhập đủ thông tin.');
        return; // Dừng thực thi hàm nếu có lỗi
    }

    // Kiểm tra tính hợp lệ của giá (phải là số)
    if (isNaN(dataPhone.price)) {
        // Hiển thị thông báo lỗi cho giá ở sp-thongbao
        let errorElement = document.getElementById('tbprice');
        if (errorElement) {
            errorElement.innerHTML = 'Giá phải là một số.';
        }
        // Hiển thị thông báo lỗi bằng hàm onFail
        onFail('Giá phải là một số.');
        return;
    } else {
        // Nếu giá hợp lệ, xóa thông báo lỗi ở sp-thongbao
        let errorElement = document.getElementById('tbprice');
        if (errorElement) {
            errorElement.innerHTML = '';
        }
    }
    // Nếu dữ liệu hợp lệ, gọi API để tạo mới điện thoại
    phoneService
        .createPhoneApi(dataPhone)
        .then((res) => {
            // Xử lý khi tạo mới thành công
            fectPhoneList();
            $('#exampleModal').modal('hide');
            onSuccess('Thêm thành công');
            resetForm()
        })
        .catch((err) => {
            // Xử lý khi gặp lỗi trong quá trình tạo mới
            console.error('Không thể tạo thông tin mới:', err);
            onFail('Có lỗi xảy ra khi tạo mới thông tin.');
        });
};

// Hàm kiểm tra tính hợp lệ của dữ liệu điện thoại
let isValidPhoneData = (dataPhone) => {
    // Thực hiện các kiểm tra tính hợp lệ ở đây

    // Kiểm tra xem tên điện thoại có được nhập không
    return dataPhone && dataPhone.name && dataPhone.name.trim() !== '';
};


window.createPhone = createPhone;

//-------------GET (id) SỬA TỪNG ID-------------
let getDetailPhone = (id) => {
    phoneService
        .getDetailPhoneApi(id)
        .then((res) => {

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
        .then((res) => {
            fectPhoneList()
            $('#exampleModal').modal('hide');

        })
        .catch((err) => {
            console.log(err);
        }
        )
}
window.updatePhone = updatePhone