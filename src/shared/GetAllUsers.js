import React, { useState } from 'react'
import { getAllUsers } from '../service/user'

const GetAllUsers = () => {
    const [data,setData]=useState()
    const getAllUser = async () => {
        console.log("pageSize>>>>>>>>", pageSize)
        console.log("pageNumber>>>>", pageNumber)
        //validation of pagen number and pagesize
        let response = await getAllUsers(pageNumber, pageSize)
        console.log(response)
     //    console.log(response.data)
         
        if(response?.data)
        {
            setData(response.data.content)
            setTotalnumberofrecord(response.headers['x-total-count'])
            console.log("---------",response.headers['x-total-count'])
            setNumberOfPages(Math.ceil(response.headers['x-total-count']/pageSize))
            console.log(pageSize)
            
        }  
    }

  return (
    <div>
      
    </div>
  )
}

export default GetAllUsers
