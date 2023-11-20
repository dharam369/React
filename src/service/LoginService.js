import axios from "axios"

export const login = async (username, password) => {
    let response = await axios.post(`http://localhost:8084/bankapp/customerLogin`, {
            username,
            password
    })
    return response
}