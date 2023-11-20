import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AdminDashboard = () => {

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
        if(localStorage.getItem('role')==null || localStorage.getItem('role')!='ROLE_ADMIN'){
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
    
                    <h1 className="pt-5 text-justify">Admin Dashboard</h1>
    
                    <div className='row' style={{ marginTop: "10vh" }}>
    
                        <div className='col-6  card1'>
    
                            <div className='card bgcolor shadow-lg '>
                                <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/getallcustomers">Show All Customers</a>
                            </div>
    
                        </div>
    
                        <div className='col-6  '>
    
                            <div className='card bgcolor shadow-lg'>
                                <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/getallbanks">Show All Banks</a>
                            </div>
    
                        </div>
    
                    </div>
    
                    <div className='row mt-5'>
    
                        <div className='col-6  '>
    
                            <div className='card bgcolor shadow-lg'>
                                <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/getallaccounts">Show All Accounts</a>
                            </div>
    
                        </div>
    
                        <div className='col-6  '>
    
                            <div className='card bgcolor shadow-lg'>
                                <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/getalltransactions">Show All Transactions</a>
                            </div>
    
                        </div>
    
                        
    
                    </div>
    
    
                </div>
            </>
        )
    }
    else{
        <a href="/">Please Try Login</a>
    }
}

export default AdminDashboard