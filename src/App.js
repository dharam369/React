import logo from './logo.svg';
import './App.css';
import Example from './component/Example';
import Component1 from './component/Component1';
import Customer from './component/Customer';
import Admin from './component/Admin';
import Transfer from './component/Transfer';
import GetAll from './component/GetAll';
import { useState } from 'react';
import Login from './component/Login';
import ShowTransactions from './component/ShowTransactions';
import ShowPassBookById from './component/ShowPassBookById';
import ShowAllAccount from './component/ShowAllAccount'
import AllBank from './component/AllBank'

import {Route, Routes } from 'react-router-dom';
import AdminDashboard from './component/AdminDashboard';
import CustomerDashboard from './component/customerdashboard';
import EditCustomer from './component/EditCustomer';

function App() {
  const [data,setData]=useState()
  const printData = (e)=>{
    if(e){
      e.preventDefault()
    }
    console.log("Data was printed from printdata function>>>>",data)
  }
  const printData2 = (e)=>{
    if(e){
      e.preventDefault()
    }
    console.log("Helllllloooo , Data was printed from printdata function>>>>",data)
  }

  return (
    <>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/getallcustomers" element={<Customer/>}/>
      <Route exact path="/admins" element={<Admin/>}/>
      <Route exact path="/getalltransactions" element={<ShowTransactions/>}/>
      <Route exact path="/transfer" element={<Transfer/>}/>
      <Route exact path="/passbook" element={<ShowPassBookById/>}/>
      <Route exact path="/getallaccounts" element={<ShowAllAccount/>}/>
      <Route exact path="/getallbanks" element={<AllBank/>}/>
      <Route exact path="/admindashboard" element={<AdminDashboard/>}/>
      <Route exact path="/customerdashboard" element={<CustomerDashboard/>}/>

      
    </Routes>
  
    </>
  );
}

export default App;
