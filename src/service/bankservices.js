import axios from "axios"

export const getAllBanks = async (pageNumber, pageSize) => {
    console.log(">>>>>>>GG")
    let response = await axios.get(`http://localhost:8084/bankapp/allBanks`, {
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
export const bankById = async (bankId) => {
    console.log(">>>>>>>GG")
    let response = await axios.get(`http://localhost:8084/bankapp/getBankById`, {
        params: {
            bankId:bankId
        },
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    console.log(">>>>>>>GG",response)
    return response
}

export const addBank = async (bankName,abbrevation,branch,ifsc) => {
    let response = await axios.post(`http://localhost:8084/bankapp/addBank`, {
    bankName,
	abbrevation,
	branch,
    ifsc
    },
    {
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    return response
}


export const updateBank = async (bankId,bankName,abbrevation,branch,ifsc) => {
    let response = await axios.put(`http://localhost:8084/bankapp/updateBank`, {
        bankId,
    bankName,
	abbrevation,
	branch,
    ifsc
    },
    {
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    return response
}


export const deleteBank = async (bankId) => {

    let response = await axios.delete(`http://localhost:8084/bankapp/deleteBank`, {
        params:{
            bankId: bankId
        },headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
        
    })
    return response
}
