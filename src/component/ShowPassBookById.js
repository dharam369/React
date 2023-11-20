import React, { useEffect, useState }from 'react'
import PaginationApp from '../shared/PaginationApp'
import Table from '../shared/Table'
import PageSizeApp from '../shared/PageSizeApp'
import { getAllTransactions } from '../service/transactionservice'
import AddCustomer from './AddCustomer'
import AddAdmin from './AddAdmin'
import { FinalTable } from '../shared/FinalTable'
import { printPassbook } from '../service/accountservice'

const ShowPassBookById = () => {
    const [data,setData]=useState()
    const [accountNumber,setAccountNumber]=useState()

    const printPass = async () => {
        //validation of accountNumber
        let response = await printPassbook(accountNumber)
        console.log(response)
        console.log(response.data.currentBalance)
        setData(response.data.transactions)  
    }



  return (
    <div>

    <input type="text" onChange={(e) => {
                            setAccountNumber(e.target.value)
                            
                        }}/>
    <button type="submit" className="btn btn-primary" onClick={printPass}>Submit</button>
    <FinalTable data={data}/>
    </div>
  )
}

export default ShowPassBookById
