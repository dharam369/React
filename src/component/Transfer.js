import React,{useState} from 'react'
import { transfer } from '../service/transactionservice'
import { useNavigate } from 'react-router-dom'

const AddTransaction = () => {
    const [accountNumber,setAccountNumber] = useState()
    const[recieverAccount,setRecieverAccount]=useState()
    const [type,setType] = useState()
    const[amount,setAmount]=useState()
    
    const handleMySubmit = async (e) => {
        e.preventDefault()
        let response = await transfer(accountNumber,recieverAccount,type,amount)
        console.log(response)
        
    }
  return (
    <div>
      <form>
            <div class="form-group">
            <input type="text" className="form-control" id="accountNumber" placeholder="Account Number" value={accountNumber}
                        onChange={(e) => {
                            setAccountNumber(e.target.value)
                            
                        }}/>
            <input type="text" className="form-control" id="recieverAccount" placeholder="Reciever Account" value={recieverAccount}
                        onChange={(e) => {
                            setRecieverAccount(e.target.value)
                            
                        }}/>
            <input type="text" className="form-control" id="type" placeholder="Account Type" value={type}
                        onChange={(e) => {
                            setType(e.target.value)
                            
                        }}/>
            <input type="email" className="form-control" id="amount" placeholder="Amount" value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value)
                            
                        }}/>
            </div>
            <div class="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleMySubmit}>Transaction</button>
        </form>
        <br/>
    </div>
  )
}

export default AddTransaction
