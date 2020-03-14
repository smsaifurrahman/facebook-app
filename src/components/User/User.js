import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css';

const User = (props) => {
     //console.log(props);
    const { img, name, salary, email } = props.user;
    return (
        <div className="user">
            <div className="user-img">
                <img src={img} alt="" />
            </div>
            <div className="user-info">
                <h2 className="user-name">{name}</h2>
                <br />
                <h3> <small>Email:{email}</small> </h3>
                <h3> <small>Salary:{salary}</small> </h3>
                <button className = "main-button"
                onClick ={ ()=>props.handleAddUser(props.user)}
                ><FontAwesomeIcon icon={faUserPlus} /> <b>Add Friend</b> </button>

            </div>

        </div>
    );
};

export default User;