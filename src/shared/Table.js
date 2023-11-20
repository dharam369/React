import React from 'react'
import { useContext } from 'react'
import { TableContext } from './FinalTable'

let headerdata=<></>
function Table() {
    const obj=useContext(TableContext)
    if(obj.data){
        console.log("data=="+obj.data)
        console.log("key=="+Object.keys(obj.data[0]))
        headerdata=Object.keys(obj.data[0]).map(k=>{
            return (
                <th>{k}</th>
            )
        })
    }
    let rowofusers=<></>
    if(obj.data){
        rowofusers=obj.data.map((value,ind)=>{
            return(
                <tr key={ind}>
                    {
                        Object.values(value).map((t)=>{
                            return(
                                <td>{t}</td>
                            )
                        })
                    }
                    {obj.isupdate&&<td><button className='btn btn-secondary' onClick={
                        ()=>{obj.updatefunc(value)}
                        }>
                            Update</button></td>}
                    {obj.isdelete&&<td><button className='btn btn-danger'onClick={
                        ()=>{obj.deletefunc(value)}
                        }>
                        Delete</button></td>}
                </tr>
            )
        })
    }
  return (
    <>
    <table class="table">
        <thead>
            <tr>{headerdata}</tr>
        </thead>
    
    <tbody>
        {rowofusers}
    </tbody>
    </table>   
    </>
  )
}

export default Table
