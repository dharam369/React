import React, { useEffect, useState }from 'react'
import PaginationApp from '../shared/PaginationApp'
import Table from '../shared/Table'
import PageSizeApp from '../shared/PageSizeApp'
import { getAllCustomers } from '../service/customerservice'
import AddCustomer from './AddCustomer'
import AddAdmin from './AddAdmin'
import { FinalTable } from '../shared/FinalTable'
import { deleteBank, getAllBanks, updateBank } from '../service/bankservices'
import AddBank from './AddBank'
import EditBank from './EditBank'

const Bank = () => {
    const [pageSize, setPageSize] = useState(5)
    const [pageNumber, setPageNumber] = useState(0)
    const [data,setData]=useState()
    const [numberOfPages,setNumberOfPages]=useState()
    const [totalnumberofrecord,setTotalnumberofrecord]=useState()

    const [bankId, setBankId] = useState();
    const [bankName, setBankName] = useState();
    const [abbrevation, setAbbrevation] = useState();
    const [branch, setBranch] = useState();
    const [ifsc, setIfsc] = useState();
    const [show, setShow] = useState();

    const handledelete = async(d) => {
        console.log(d)
        console.log(d.bankId)
        let response= await deleteBank(d.bankId)
        console.log(response)
      }


    const handleUpdate = (d) => {
        console.log(d)
        setBankId(d.bankId);
        setBankName(d.bankName);
        setAbbrevation(d.abbrevation);
        setBranch(d.branch);
        setIfsc(d.ifsc)
        setShow(true);
      }

      const updateBankHandler = async () => {
        try {
         let response = await updateBank(bankId,bankName,abbrevation,branch,ifsc)
         console.log("Bank Updated Successfully")
         console.log(response)
            
        }
        catch (error) {
          alert(error.response.data.message);
        }
    
      }

    const getAllBank = async () => {
        console.log("pageSize>>>>>>>>", pageSize)
        console.log("pageNumber>>>>", pageNumber)
        //validation of pagen number and pagesize
        let response = await getAllBanks(pageNumber, pageSize)
        console.log(response)
        // console.log(response.data)
         
        if(response.data)
        {
            setData(response.data.content)
            setTotalnumberofrecord(response.headers['x-total-count'])
            console.log("---------",response.headers['x-total-count'])
            setNumberOfPages(Math.ceil(response.headers['x-total-count']/pageSize))
            console.log(pageSize)
            
        }  
    }
    useEffect(()=>{
        getAllBank()
    },[pageNumber,pageSize,totalnumberofrecord])


  return (
    <div>
        <AddBank/>

        <FinalTable data={data} numberOfPages={numberOfPages} getFunction={getAllBank} pageNumber={pageNumber} setPageNumber={setPageNumber} pageSize={pageSize} setPageSize={setPageSize}
        isupdate={true} isdelete={true} updatefunc={handleUpdate} deletefunc={handledelete}
        />


        <EditBank
        bankName={bankName}
        abbrevation={abbrevation}
        branch={branch}
        ifsc={ifsc}
        show={show}
        setBankName={setBankName}
        setAbbrevation={setAbbrevation}
        setBranch={setBranch}
        setIfsc={setIfsc}
        setShow={setShow}
        updateBankHandler={updateBankHandler}

      ></EditBank>
        
    </div>
  )
}

export default Bank
