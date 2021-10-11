import React from "react";
import './User.css';

const User = ({name, age}) => {
  return (
    <div className="user">
      {`${name} (${age} years old)`}
    </div>
  )
}

export default User;