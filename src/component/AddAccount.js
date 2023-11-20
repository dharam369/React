import React,{useState} from 'react'
import { addCustomer } from '../service/customerservice'
import { useNavigate } from 'react-router-dom'
import { openAccount } from '../service/accountservice'

const AddAccount = () => {
    const [customerId,setCustomerId]=useState()
    const [bankId,setBankId]=useState()
    const [balance,setBalance]=useState()
    

    const handleMySubmit = async (e) => {
        e.preventDefault()
        let response = await openAccount(customerId,bankId,balance) 
        console.log(response)
        
    }
  return (
    <div>
      <form>
            <div class="form-group">
            <input type="text" className="form-control" id="name" placeholder="customerId" value={customerId}
                        onChange={(e) => {
                            setCustomerId(e.target.value)
                            
                        }}/>
            <input type="text" className="form-control" id="name" placeholder="bankId" value={bankId}
                        onChange={(e) => {
                            setBankId(e.target.value)
                            
                        }}/>
            <input type="text" className="form-control" id="balance" placeholder="balance" value={balance}
                        onChange={(e) => {
                            setBalance(e.target.value)
                            
                        }}/>
            </div>
            <div class="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleMySubmit}>Add Account</button>
        </form>
        <br/>
    </div>
  )
}

export default AddAccount
