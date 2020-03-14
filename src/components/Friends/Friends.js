import React, { useState } from 'react';
import './Friends.css';
//import User from '../User/User';
import fakeData from '../../fakeData';
import User from '../User/User';
import Fcount from '../Friendcount/Fcount';

const Friends = () => {
   
   const first10  =fakeData.slice(0,15); 
   const [users, setUsers] = useState(first10);
   const [fCount,setfCount] = useState([]);
   
   const handleAddUser = (user)=>{
       console.log("User added", user);
       const newfCount = [...fCount,user];
       setfCount(newfCount);
   }
     

    return (
        <div className="info-container">
            <div className="friends-container">
              
              {
                  users.map(user => <User 
                    handleAddUser = {handleAddUser}
                    user ={user}></User>)
              }     
            </div>
            
            <div className="count-container">
                <Fcount fCount={fCount}></Fcount>
            
            </div>
        </div>

    );
};

export default Friends;