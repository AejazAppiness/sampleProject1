import React from 'react'

function CustomerDetail({details}) {
    const {name, email, phone, city, state, country, organization, jobProfile, additionalInfo} = details
    return (
        <div className="card" style={{width: "60%"}}>
            <p className="name">{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{country}</p>
            <p>{organization}</p>
            <p>{jobProfile}</p>
            <p>{additionalInfo}</p>
        </div>
    )
}

export default CustomerDetail
