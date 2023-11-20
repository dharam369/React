import React, { useState } from 'react'

const Example = () => {
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const handleMySubmit =(e)=>{
        e.preventDefault()
        console.log("email>>>>>",email)
        console.log("password>>>>>",password)
    }

  return (
    <>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control" value={email} onChange={(e)=>{
        setEmail(e.target.value)
    }} aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" className="form-control" value={password} onChange={(e)=>{
        setPassword(e.target.value)
        //console.log(password)
        console.log(e.target.value)
    }} id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={handleMySubmit} className="btn btn-primary">Submit</button>
</form>

<table>
    <tr>
        <td>Email ::  </td>
        <td>{email}</td>
    </tr>
    <tr>
        <td>Password ::  </td>
        <td>{password}</td>
    </tr>
</table>

</>
  )
}

export default Example
