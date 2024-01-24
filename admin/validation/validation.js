export let checkEmptyValue = (dataPhone) => {
  const { id, name, price, desc } = dataPhone;

  if (!id || !name || !price || !desc) {
      alert('Vui lòng điền đầy đủ thông tin cho các trường!');
      return false;
  }

  return true;
}

// Hàm validation kiểm tra dữ liệu không được bỏ trống cho các trường
export const validateForm = (formData) => {
    const fields = [
        { name: 'id', displayId: 'tbid' },
        { name: 'name', displayId: 'tbname' },
        { name: 'price', displayId: 'tbprice' },
        { name: 'desc', displayId: 'tbdesc' },
        { name: 'img', displayId: 'tbimg' }
    ];

    let isValid = true;

    fields.forEach((field) => {
        if (!validateNotEmpty(formData[field.name], field.displayId)) {
            isValid = false;
        }
    });

    return isValid;
};

// Hàm validation kiểm tra dữ liệu không được bỏ trống
export const validateNotEmpty = (value, displayId) => {
    if (!value.trim()) {
        // Nếu giá trị rỗng sau khi loại bỏ các khoảng trắng ở đầu và cuối
        displayErrorMessage(displayId, 'Không được bỏ trống');
        return false;
    }
    // Xóa bất kỳ thông báo lỗi cũ nào nếu có
    clearErrorMessage(displayId);
    return true;
};

// Hàm hiển thị thông báo lỗi
export const displayErrorMessage = (displayId, message) => {
    const errorElement = document.getElementById(displayId);
    if (errorElement) {
        errorElement.textContent = 'không được bỏ trống';
    }
};

// Hàm xóa thông báo lỗi
export const clearErrorMessage = (displayId) => {
    const errorElement = document.getElementById(displayId);
    if (errorElement) {
        errorElement.textContent = '';
    }
};
