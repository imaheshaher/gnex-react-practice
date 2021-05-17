import React from 'react';
import {Route} from 'react-router-dom'
import AddUser from './AddUser';
import LoginUser from './LoginUser';
import LogoutUser from './LogoutUser';
import ShowUsers from './ShowUsers';
import UpdateUser from './UpdateUser';
import UserProfile from './UserProfile';

function ImportUser(props) {
    return (
        <>
        <Route exact path="/register"><AddUser  { ...props} /></Route>
        <Route exact path="/users"><ShowUsers {...props} /></Route>
        <Route exact path="/updateuser"><UpdateUser {...props}/></Route>
        <Route exact path="/login"><LoginUser /></Route>
        <Route exact path="/logout"><LogoutUser /></Route>
        <Route exact path="/profile"><UserProfile /></Route>



        </>
    );
}

export default ImportUser;