import React,{useState} from 'react'
import { addCustomer } from '../service/customerservice'
import { useNavigate } from 'react-router-dom'

const AddCustomer = () => {
    const [name,setName]=useState()
    const [surname,setSurname]=useState()
    const [mobile,setMobile]=useState()
    const [email, setEmail] = useState()
    const [username,setUsername]=useState()
    const [password, setPassword] = useState()


    const handleMySubmit = async (e) => {
        e.preventDefault()
        let response = await addCustomer(name,surname,mobile,email,username,password)
        console.log(response)
    }
  return (
    <div>
      <form>
            <div class="form-group">
            <input type="text" className="form-control" id="name" placeholder="Name" value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            
                        }}/>
            <input type="text" className="form-control" id="surname" placeholder="SurName" value={surname}
                        onChange={(e) => {
                            setSurname(e.target.value)
                            
                        }}/>
            <input type="text" className="form-control" id="mobile" placeholder="Mobile" value={mobile}
                        onChange={(e) => {
                            setMobile(e.target.value)
                            
                        }}/>
            <input type="email" className="form-control" id="email" placeholder="Email" value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            
                        }}/>
            <input type="text" className="form-control" id="userName" placeholder="UserName" value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                            
                        }}/>
            <input type="password" className="form-control" id="password" placeholder="Password" value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            
                        }}/>
            </div>
            <div class="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleMySubmit}>Add Customer</button>
        </form>
        <br/>
    </div>
  )
}

export default AddCustomer
