import React from "react";
import {useParams}  from "react-router-dom";

function User(){
    const {userId} = useParams();
    return(
        <h1 className="bg-blue-700 p-4 w-full text-center text-white" >UserId: {userId}</h1>
    )
}

export default User;