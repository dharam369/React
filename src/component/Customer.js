import React, { useEffect, useState } from 'react'
import PaginationApp from '../shared/PaginationApp'
import Table from '../shared/Table'
import PageSizeApp from '../shared/PageSizeApp'
import { getAllCustomers } from '../service/customerservice'
import AddCustomer from './AddCustomer'
import AddAdmin from './AddAdmin'
import { FinalTable } from '../shared/FinalTable'
import EditCustomer from './EditCustomer'
import { updateCustomer } from '../service/customerservice'

const Customer = () => {
    const [pageSize, setPageSize] = useState(5)
    const [pageNumber, setPageNumber] = useState(0)
    const [data, setData] = useState()
    const [numberOfPages, setNumberOfPages] = useState()
    const [totalnumberofrecord, setTotalnumberofrecord] = useState()

    const [customerId, setCustomerId] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();
    const [show, setShow] = useState();




    const handleUpdate = (d) => {
        console.log(d)
        setName(d.name);
        setSurname(d.surname);
        setMobile(d.mobile);
        setEmail(d.email);
        setShow(true);
        setCustomerId(d.id);
      }

      const updateCustomerHandler = async () => {
        try {
          let response = await updateCustomer(customerId, name, surname, mobile, email);
          console.log("Customer Updated Successfully")
         // setUpdateData(response);
        }
        catch (error) {
          alert(error.response.data.message);
        }
    
      }

    const getAllCustomer = async () => {
        console.log("pageSize>>>>>>>>", pageSize)
        console.log("pageNumber>>>>", pageNumber)
        //validation of pagen number and pagesize
        let response = await getAllCustomers(pageNumber, pageSize)
        console.log(response)
        // console.log(response.data)

        if (response.data) {
            setData(response.data.content)
            setTotalnumberofrecord(response.headers['x-total-count'])
            console.log("---------", response.headers['x-total-count'])
            setNumberOfPages(Math.ceil(response.headers['x-total-count'] / pageSize))
            console.log(pageSize)

        }
    }
    useEffect(() => {
        getAllCustomer()
    }, [pageNumber, pageSize, totalnumberofrecord])


    return (
        <div>
            <AddCustomer />

            <FinalTable data={data} numberOfPages={numberOfPages} getFunction={getAllCustomer} pageNumber={pageNumber} setPageNumber={setPageNumber} pageSize={pageSize} setPageSize={setPageSize}
                isupdate={true} isdelete={false} updatefunc={handleUpdate} 
            />
            
            <EditCustomer
        name={name}
        surname={surname}
        mobile={mobile}
        email={email}
        show={show}
        setName={setName}
        setMobile={setMobile}
        setEmail={setEmail}
        setSurname={setSurname}
        setShow={setShow}
        updateCustomerHandler={updateCustomerHandler}

      ></EditCustomer>


        </div>
    )
}

export default Customer
