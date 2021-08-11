import React from 'react'

function CustomerList({customer, showDetails}) {
    const {id, name, email, phone} = customer
    return (
        <div className='card'>
            <p className="name">{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={() => showDetails(id)} className='btn'> Click to View Details</button>
        </div>
    )
}

export default CustomerList
