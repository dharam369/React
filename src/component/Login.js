import React, { useState } from 'react'
import { login } from '../service/LoginService'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    //useState
    // let email = "yash", password = "shah"

    const naviagate=new useNavigate();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleMySubmit = async (e) => {
        e.preventDefault()
        console.log("username>>>>>>>>>", email)
        console.log("password>>>>", password)

        //Validate Email and Password
        //Call a service which will be a post request in backend
        let response = await login(email,password)
        console.log("Response/////////////",response)
        if(response!="bad-credential"){
            localStorage.clear()
            localStorage.setItem('auth',response.data.accessToken)
            console.log("Token:::::",response.data.accessToken)
            if(response.data.roletype=="ROLE_ADMIN")
            {
                console.log("Admin>>>>",response.data.roletype)
                localStorage.setItem('role',response.data.roletype)
                naviagate('/admindashboard');
            }
            else{
                console.log("Customer>>>>",response.data.roletype)
                localStorage.setItem('role',response.data.roletype)
                naviagate('/customerdashboard');
            }
        }
        else{
            alert("Bad Credentials!! ")
        }

    }
    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control"
                        aria-describedby="emailHelp" value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            
                        }} />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="text" className="form-control"
                        value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" 
                onClick={handleMySubmit}>Submit</button>
            </form>
           
        </>
    )
}

export default Login
