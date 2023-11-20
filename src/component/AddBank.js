import React,{useState} from 'react'
import { addCustomer } from '../service/customerservice'
import { addAdmin } from '../service/adminservice'
import { useNavigate } from 'react-router-dom'
import { addBank } from '../service/bankservices'

const AddAdmin = () => {
    const [bankName,setBankName]=useState()
    const [abbrevation,setAbbrevation]=useState()
    const [branch,setBranch]=useState()
    const [ifsc, setiIfsc] = useState()
    

    const handleMySubmit = async (e) => {
        e.preventDefault()
        let response = await addBank(bankName,abbrevation,branch,ifsc)
        console.log(response)
    }
  return (
    <div>
      <form>
            <div class="form-group">
            <input type="text" className="form-control" id="bankName" placeholder="bankName" value={bankName}
                        onChange={(e) => {
                            setBankName(e.target.value)
                            
                        }}/>
            <input type="text" className="form-control" id="abbrevation" placeholder="abbrevation" value={abbrevation}
                        onChange={(e) => {
                            setAbbrevation(e.target.value)
                            
                        }}/>
            <input type="text" className="form-control" id="branch" placeholder="branch" value={branch}
                        onChange={(e) => {
                            setBranch(e.target.value)
                            
                        }}/>
            <input type="email" className="form-control" id="ifsc" placeholder="ifsc" value={ifsc}
                        onChange={(e) => {
                            setiIfsc(e.target.value)
                            
                        }}/>
            </div>
            <div class="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleMySubmit}>Add Bank</button>
        </form>
        <br/>
    </div>
  )
}

export default AddAdmin
