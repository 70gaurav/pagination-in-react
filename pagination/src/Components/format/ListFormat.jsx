import React from 'react'
import "./style.css"

function ListFormat(props) {
   
    return (
        <div className='list'>
            <ul>

                <li><button>Delete</button></li>
                <li><p>{props.id}</p></li>
                <li><p>{props.keyDetail}</p></li>
                <li><p>{props.issuedTo}</p></li>
                <li><p>{props.issuedOn}</p></li>
                <li><p>{props.activatedOn}</p></li>
                <li><p>{props.activated}</p></li>
                <li><p>{props.macId}</p></li>
                <li><p>{props.ipAddress}</p></li>
                <li><p>{props.deleted}</p></li>
                <li><p>{props.daysCount}</p></li>
                <li><p>{props.expiredOn}</p></li>
                <li><p>{props.LicenseType}</p></li>
            </ul>

        </div>
    )
}

export default ListFormat