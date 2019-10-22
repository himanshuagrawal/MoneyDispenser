import React from 'react'

import './result.css';

export default function Result({notesDispensed}) {
    let sum=0;
    notesDispensed.forEach(element => {
        sum=sum+element;
    });
    return (
        <div className="result">
            <h4>You will get the following amount</h4>
            <table>
                <tbody>
                <tr>
                    <td>{notesDispensed[0]} notes of Rs 1</td>
                    <td>{notesDispensed[1]} notes of Rs 2</td>
                </tr>
                <tr>
                    <td>{notesDispensed[2]} notes of Rs 5</td>
                    <td>{notesDispensed[3]} notes of Rs 10</td>
                </tr>
                <tr>
                    <td>{notesDispensed[4]} notes of Rs 20</td>
                    <td>{notesDispensed[5]} notes of Rs 50</td>
                </tr>
                <tr>
                    <td>{notesDispensed[6]} notes of Rs 100</td>
                    <td>{notesDispensed[7]} notes of Rs 200</td>
                </tr>
                <tr>
                    <td>{notesDispensed[8]} notes of Rs 500</td>
                    <td>{notesDispensed[9]} notes of Rs 2000</td>
                </tr>
                </tbody>
            </table>
            <h4>Total notes dispensed: {sum}</h4>
        </div>
    )
}
