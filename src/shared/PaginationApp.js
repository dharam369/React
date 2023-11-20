import React, { useContext } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { TableContext } from './FinalTable';


const PaginationApp = () => {
  const obj=useContext(TableContext)
  
    let items = [];
for (let number = 0; number < obj.numberOfPages; number++) {
  items.push(
    <Pagination.Item key={number} active={number === obj.pageNumber} onClick={
      e=>{
          obj.setPageNumber(number)
          
      }
    }>
      {number}
    </Pagination.Item>,
  );
}


  return (
    <>
    <div>
      <Pagination>{items}</Pagination>
    </div>
    </> 
  )
}

export default PaginationApp
