let saveToLocalStorage = (arr = phoneArr) => {
    localStorage.setItem('phoneArr', JSON.stringify(arr));
}

let getFromLocalStorage = (arr) => {
    if (localStorage.getItem('phoneArr')) {
        return JSON.parse(localStorage.getItem('phoneArr'));
    }
    else {
        return [];
    }
}

let removeItemFromLocalStorage = (index) => {
    phoneArr.splice(index, 1);
    saveToLocalStorage();
}