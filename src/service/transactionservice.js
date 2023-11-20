import axios from "axios"
export const getAllTransactions = async (pageNumber, pageSize) => {
    let response = await axios.get(`http://localhost:8084/bankapp/showAllTransactions`, {
        params: {
            pageSize: pageSize,
            pageNumber: pageNumber
        },
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    return response
}

export const transfer = async (accountNumber,recieverAccount,type,amount) => {
    console.log("accountNumber<<<",accountNumber)
    console.log("recieverAccount<<<",recieverAccount)
    
    let response = await axios.post(`http://localhost:8084/bankapp/transaction`, {
    accountNumber:accountNumber,
    recieverAccount:recieverAccount,
    type:type,
	amount:amount
    },
    {
        headers: {
            Authorization:'Bearer '+localStorage.getItem('auth')
        }
    })
    return response
}