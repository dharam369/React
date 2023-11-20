import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../service/user'
import { AxiosHeaders } from 'axios'
import PaginationApp from '../shared/PaginationApp'
import Table from '../shared/Table'
import PageSizeApp from '../shared/PageSizeApp'

const GetAll = () => {
    const [pageSize, setPageSize] = useState(5)
    const [pageNumber, setPageNumber] = useState(0)
    const [data,setData]=useState()
    const [numberOfPages,setNumberOfPages]=useState()
    const [totalnumberofrecord,setTotalnumberofrecord]=useState()

    const getAllUser = async () => {
        console.log("pageSize>>>>>>>>", pageSize)
        console.log("pageNumber>>>>", pageNumber)
        //validation of pagen number and pagesize
        let response = await getAllUsers(pageNumber, pageSize)
        console.log(response)
     //    console.log(response.data)
         
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
        getAllUser()
    },[pageNumber,pageSize,totalnumberofrecord])

    let rowsOfUsers
    let rowsheader
    if(data){
        rowsheader=Object.keys(data[0]).map((d)=>{
            return(
                    <th>{d}</th>
            )
        })

      //  console.log(data)
        rowsOfUsers=data.map((d)=>{
            return(
                <tr>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.age}</td>
                </tr>
            )
        })
    }

    let pageNumberOptions
    let arrayOfPageNumbers=[]
    console.log(numberOfPages)
    if(numberOfPages>0){
        //I required array from 1 to numberOfPages
        for(let index=1;index<=numberOfPages;index++){
            arrayOfPageNumbers.push(index);
        }
        pageNumberOptions = arrayOfPageNumbers.map(p=>{
            return(
                <option value={p-1} selected={p-1 == pageNumber}>{p}</option>
            )

        })
    }
    
//        console.log(Object.keys(data[0]))
    
    return (
        <>
            <PageSizeApp pageSize={pageSize} setPageSize={setPageSize}/>
            
            <PaginationApp numberOfPages={numberOfPages} 
                getFunction={getAllUser}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                />
                
                <button type="button" className="btn btn-success" onClick={getAllUser}>Success</button>
            
            <Table data={data}/>


        </>
    )
}

export default GetAll
