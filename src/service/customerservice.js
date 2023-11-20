import axios from "axios"

export const getAllCustomers = async (pageNumber, pageSize) => {
    let response = await axios.get(`http://localhost:8084/bankapp/getAllCustomer`, {
        params: {
            pageSize: Number(pageSize),
            pageNumber: Number(pageNumber)
        }
    })
    return response
}

export const addCustomer = async (name,surname,mobile,email,userName,password) => {
    let response = await axios.post(`http://localhost:8084/bankapp/addCustomer`, {
        name:name,
        surname:surname,
        mobile:mobile,
        email:email,
        userName:userName,
        password:password
    },
    {
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    return response
}

export const updateCustomer = async (customerId,firstName,lastName,mobile,email) => {
    let response = await axios.put(`http://localhost:8084/bankapp/addCustomer`, {
        customerId,
    firstName,
    lastName,
    mobile,
    email
    },
    {
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    return response
}