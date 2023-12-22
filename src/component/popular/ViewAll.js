import React from 'react'
import './ViewAll.css';

const ViewAll = ({ info }) => {

    return (
        <div className='viewAll'>
            <div className='viewAll-heading'>All the Details</div>

            <table border="2" width="500" className="table table-light table-striped table-bordered">
                <tr className="table-success">
                    <th >Properties</th>
                    <th>Details</th>
                </tr>

                <tr className="table-info">
                    <td >Make</td>
                    <td className='table-data'>{info.make}</td>
                </tr>
                <tr className="table-info">
                    <td >Model</td>
                    <td className='table-data'>{info.model}</td>
                </tr>
                <tr className="table-info">
                    <td >Year</td>
                    <td className='table-data'>{info.year}</td>
                </tr>
                <tr className="table-info">
                    <td >Type</td>
                    <td className='table-data'>{info.type}</td>
                </tr>
                <tr className="table-info">
                    <td >Engine</td>
                    <td className='table-data'>{info.engine}</td>
                </tr>
                <tr className="table-info">
                    <td >Power</td>
                    <td className='table-data'>{info.power}</td>
                </tr>
                <tr className="table-info">
                    <td >Torque</td>
                    <td className='table-data'>{info.torque}</td>
                </tr>

            </table>

        </div>
    )
}

export default ViewAll
