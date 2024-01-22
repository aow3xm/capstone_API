
let getPhoneListApi = () => {
    return axios({
        url: 'https://6597f70f668d248edf23ce4d.mockapi.io/api/v1/products',
        method: 'GET',
    });
};

let deletePhoneApi = (id) => {
    return axios({
        url: `https://6597f70f668d248edf23ce4d.mockapi.io/api/v1/products/${id}`,
        method: 'DELETE',
    })
};

let createPhoneApi = (dataPhone) => {
    return axios({
        url: 'https://6597f70f668d248edf23ce4d.mockapi.io/api/v1/products',
        method: 'POST',
        data: dataPhone,
      });
    };


let phoneService = {
    getPhoneListApi,
    deletePhoneApi,
    createPhoneApi,
}

 

export default phoneService;