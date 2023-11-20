import React, { useEffect, useState }from 'react'
import PaginationApp from '../shared/PaginationApp'
import Table from '../shared/Table'
import PageSizeApp from '../shared/PageSizeApp'
import { getAllTransactions } from '../service/transactionservice'
import AddCustomer from './AddCustomer'
import AddAdmin from './AddAdmin'
import { FinalTable } from '../shared/FinalTable'

const Tranansaction = () => {
    const [pageSize, setPageSize] = useState(5)
    const [pageNumber, setPageNumber] = useState(0)
    const [data,setData]=useState()
    const [numberOfPages,setNumberOfPages]=useState()
    const [totalnumberofrecord,setTotalnumberofrecord]=useState()

    const getAllTranansaction = async () => {
        console.log("pageSize>>>>>>>>", pageSize)
        console.log("pageNumber>>>>", pageNumber)
        //validation of pagen number and pagesize
        let response = await getAllTransactions(pageNumber, pageSize)
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
        getAllTranansaction()
    },[pageNumber,pageSize,totalnumberofrecord])


  return (
    <div>

<FinalTable data={data} numberOfPages={numberOfPages} getFunction={getAllTranansaction} pageNumber={pageNumber} setPageNumber={setPageNumber} pageSize={pageSize} setPageSize={setPageSize}/>

    </div>
  )
}

export default Tranansaction
