import React, { useEffect, useState }from 'react'
import PaginationApp from '../shared/PaginationApp'
import Table from '../shared/Table'
import PageSizeApp from '../shared/PageSizeApp'
import { getAllTransactions } from '../service/transactionservice'
import AddCustomer from './AddCustomer'
import AddAdmin from './AddAdmin'
import { FinalTable } from '../shared/FinalTable'
import { getAllAccounts } from '../service/accountservice'
import AddAccount from './AddAccount'

const Account = () => {
    const [pageSize, setPageSize] = useState(5)
    const [pageNumber, setPageNumber] = useState(0)
    const [data,setData]=useState()
    const [numberOfPages,setNumberOfPages]=useState()
    const [totalnumberofrecord,setTotalnumberofrecord]=useState()

    const getAllAccount = async () => {
        console.log("pageSize>>>>>>>>", pageSize)
        console.log("pageNumber>>>>", pageNumber)
        //validation of pagen number and pagesize
        let response = await getAllAccounts(pageNumber, pageSize)
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
        getAllAccount()
    },[pageNumber,pageSize,totalnumberofrecord])


  return (
    <div>
        <AddAccount/>

<FinalTable data={data} numberOfPages={numberOfPages} getFunction={getAllAccount} pageNumber={pageNumber} setPageNumber={setPageNumber} pageSize={pageSize} setPageSize={setPageSize}/>

    </div>
  )
}

export default Account
