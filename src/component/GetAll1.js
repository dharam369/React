import PaginationApp from '../shared/PaginationApp'
import React, { useState } from 'react'
import { getAllUsers } from '../service/user'
import { AxiosHeaders } from 'axios'

const GetAll1 = () => {
    const [pageSize, setPageSize] = useState()
    const [pageNumber, setPageNumber] = useState(1)
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
            <div className="form-floating">
                <select className="form-select" id="floatingSelect"
                    aria-label="Floating label select example" onChange={
                        (e) => {
                            setPageSize(e.target.value)
                            
                            setNumberOfPages(Math.ceil(totalnumberofrecord/e.target.value))
                            
                            
                        }
                    }>
                    <option selected>Page Size</option>
                    <option value="2" selected={2 == pageSize}>2</option>
                    <option value="5" selected={5 == pageSize}>5</option>
                    <option value="10" selected={10 == pageSize}>10</option>
                </select>
                <label for="floatingSelect">Works with selects</label>
            </div>
            <div className="form-floating">
                
                <PaginationApp numberOfPages={numberOfPages} 
                getFunction={getAllUser}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                />
                <label for="floatingSelect">Works with selects</label>
                <button type="button" className="btn btn-success" onClick={getAllUser}>Success</button>
                <table data={data}/>
            </div>
        </>
    )
}

export default GetAll1
