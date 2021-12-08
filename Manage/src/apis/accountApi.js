import axiosInstance from './axiosInstance';

const accountApi = {
    // [GET] baseURL/accounts
    findAll: () => {
        const url = '/accounts';
        return axiosInstance.get(url);
    },    

    // [POST] baseURL/accounts
    insert: body => {
        const url = '/accounts';
        return axiosInstance.post(url, body);
    },
    edit: (id,body) =>{
        const url = `'/accounts/${id}'`;
        return axiosInstance.put(url, body);
    }
    
};

export default accountApi;
