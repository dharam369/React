import React, { createContext } from 'react'
import PageSizeApp from './PageSizeApp'
import Table from './Table'
import PaginationApp from './PaginationApp'

export const TableContext= createContext()

export const FinalTable = ({data,numberOfPages,getFunction,pageNumber,setPageNumber,pageSize,setPageSize}) => {
  return (
    <div>
      <TableContext.Provider value={{data,numberOfPages,getFunction,pageNumber,setPageNumber,pageSize,setPageSize}}>
          <Table/>
            
            <PaginationApp/>
            <PageSizeApp/>
      </TableContext.Provider>
    </div>
  )
}

