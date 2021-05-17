import React from 'react';
import { useHistory } from 'react-router';

function LogoutUser(props) {
    let history = useHistory()
    var token = localStorage.getItem("token")
    if(token){
        localStorage.removeItem("token")

    }
    else {
            history.push("/login")
        }
    return (
        <div>
            User is Logged Out
        </div>
    );
}

export default LogoutUser;