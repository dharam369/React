import axios from "axios"

export const getAllAdmins = async (pageNumber, pageSize) => {
    console.log(">>>>>>>GG")
    let response = await axios.get(`http://localhost:8084/bankapp/getAllAdmin`, {
        params: {
            pageSize: pageSize,
            pageNumber: pageNumber
        },
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    console.log(">>>>>>>GG",response)
    return response
}

export const addAdmin = async (name,surname,mobile,email,userName,password) => {
    let response = await axios.post(`http://localhost:8084/bankapp/addAdmin`, {
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