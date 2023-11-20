import axios from "axios"

export const getAllAccounts = async (pageNumber, pageSize) => {
    console.log(">>>>>>>GG")
    let response = await axios.get(`http://localhost:8084/bankapp/getAllAccounts`, {
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
export const accountByBankId = async (bankId) => {
    console.log(">>>>>>>GG")
    let response = await axios.get(`http://localhost:8084/bankapp/AccountByBankId`, {
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

export const openAccount = async (customerId,bankId,balance) => {
    let response = await axios.post(`http://localhost:8084/bankapp/addAccount`, {
        customerId,
        bankId,
        balance
    },
    {
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    return response
}

export const deleteAccount = async (accountNumber) => {
    let response = await axios.delete(`http://localhost:8084/bankapp/deleteAccount`, {
        accountNumber:accountNumber
    },
    {
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    return response
}

export const printPassbook = async (accountNumber) => {
    let response = await axios.post(`http://localhost:8084/bankapp/printPassBook`, {
        accountNumber
    },
    {
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    return response
}