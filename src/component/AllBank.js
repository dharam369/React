import React, { useEffect, useState }from 'react'
import PaginationApp from '../shared/PaginationApp'
import Table from '../shared/Table'
import PageSizeApp from '../shared/PageSizeApp'
import { getAllCustomers } from '../service/customerservice'
import AddCustomer from './AddCustomer'
import AddAdmin from './AddAdmin'
import { FinalTable } from '../shared/FinalTable'
import { getAllBanks } from '../service/bankservices'
import AddBank from './AddBank'

const Customer = () => {
    const [pageSize, setPageSize] = useState(5)
    const [pageNumber, setPageNumber] = useState(0)
    const [data,setData]=useState()
    const [numberOfPages,setNumberOfPages]=useState()
    const [totalnumberofrecord,setTotalnumberofrecord]=useState()

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

        <FinalTable data={data} numberOfPages={numberOfPages} getFunction={getAllBank} pageNumber={pageNumber} setPageNumber={setPageNumber} pageSize={pageSize} setPageSize={setPageSize}/>

        
    </div>
  )
}

export default Customer
