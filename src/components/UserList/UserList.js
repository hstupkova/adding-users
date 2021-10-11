import React, { useReducer } from "react";
import './UserList.css';
import User from "../User/User";

const UserList = ({users}) => {
  return (
    <div className="user-list">
      {
        users.map(user => {return <User name={user.name} age={user.age} key={user.id} />})
      }
    </div>
  )
}

export default UserList;