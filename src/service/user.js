import axios from "axios"

export const getAllUsers = async (pageNumber, pageSize) => {
    let response = await axios.get(`http://localhost:8084/bankapp/getAllCustomer`, {
        params: {
            pageSize: pageSize,
            pageNumber: pageNumber
        }
    })
    return response
}
export const createUser = async () => {

}
export const updatUser = async () => {

}