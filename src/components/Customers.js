import React from 'react'
import CustomerList from './CustomerList';
import CustomerDetail from './CustomerDetail';
import {useState, useEffect} from 'react';
import axios from 'axios'


function Customers() {
    const [customerData, setCustomerData] = useState([])
    const [details, setDetails] = useState({})

    const getCustomerData = () => {
        axios.get("assets/sampleJson/customerList.json").then(response => setCustomerData(response.data))
    }

    const getSingleCustomer = (id=1) => {
        axios.get(`assets/sampleJson/customer${id}.json`).then(response => setDetails(response.data))
    }
    
    useEffect(() => {
        getCustomerData();
        getSingleCustomer()
    }, [])
    console.log(details);
const showDetails = (id) => {
getSingleCustomer(id)
console.log(id);
}

    return (
        <div className="App-body">
        <div className='customer-list'>
          {customerData.map(item => {
            return <CustomerList customer={item} showDetails={showDetails} key={item.id}/>
          })}
        </div>
        <CustomerDetail details={details}/>
      </div>
    )
}

export default Customers
