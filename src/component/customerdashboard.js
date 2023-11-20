import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const CustomerDashboard = () => {

    const naviagate=new useNavigate();
    const [isUserValid,setIsUserValid]=useState(false)

    const validateUser=()=>{
        if(localStorage.getItem('auth')==null){
            alert("No Tokens!! ")
            setIsUserValid(false)
            naviagate('/');
        }
        if(localStorage.getItem('auth')==null){
            setIsUserValid(false)
            naviagate('/');
        }
        if(localStorage.getItem('role')==null || localStorage.getItem('role')!='ROLE_USER'){
            setIsUserValid(false)
            naviagate('/');
        }
        setIsUserValid(true)
        return
    }

    useEffect(()=>{
        validateUser();
    },[])
    if(isUserValid){
        
    return (
        <>
            
            {/* <Navbar></Navbar> */}
            <div className='container '>

                <h1 className="pt-5 text-justify">Customer Dashboard</h1>

                <div className='row' style={{ marginTop: "10vh" }}>

                    <div className='col-4  card1'>

                        <div className='card bgcolor shadow-lg '>
                            <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/passbook">Print Passbook</a>
                        </div>

                    </div>

                    <div className='col-4  '>

                        <div className='card bgcolor shadow-lg'>
                            <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/transfer">New Transaction</a>
                        </div>

                    </div>
                    <div className='col-4  card1'>

                        <div className='card bgcolor shadow-lg '>
                            <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/getallcustomers">Edit Profile</a>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
    }else{
        <a href="/">Please Login Again</a>
    }
}

export default CustomerDashboard