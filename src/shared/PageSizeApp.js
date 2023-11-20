import React, { useContext } from 'react'
import { TableContext } from './FinalTable'

const PageSizeApp = () => {
  const obj=useContext(TableContext)


  return (
    <>
    <select value={obj.pageSize} onChange={e=>{
        obj.setPageSize(Number(e.target.value))
    }}>
    {
        [2,3,5,10].map(pageSize=>(
            <option key={pageSize} value={pageSize}>
                {pageSize}
            </option>
        ))
    }

    </select>
      
    </>
  )
}

export default PageSizeApp
