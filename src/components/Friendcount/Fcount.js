import React from 'react';
import './Fcount.css';

const Fcount = (props) => {
    const fCount = props.fCount;
    console.log(fCount);


    let total = 0;
    for (let i = 0; i < fCount.length; i++) {
        const userSalary = fCount[i];
        total = total + userSalary.salary;
    }
    //Alternative use of Reduce Function
    // const total= fCount.reduce((total,usr) => total+usr.salary,0);
    return (
        <div className="dev-container">
            <h1 className="h1-tag">Friends of Yours</h1>
            <h2>Total Friends Request Sent: {fCount.length}</h2>
            <p>Total Salary: {total}</p>
            <button className="main-button">Add more Friends</button>
        </div>
    );
};

export default Fcount;