import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { user } from '../service';
import {Button} from 'react-bootstrap'
function UserProfile(props) {
    const [userprfile,setUserprofile]= useState({})
    const getUser = () =>{
        user.then(response =>{
            setUserprofile(response.data.data)
        })
    }
    useEffect(() =>{
        getUser()
    },[])
    return (
        <div>
            User  {userprfile.email}
            <Link to={{pathname:"/register",user:userprfile}} >
                
            <Button> Update</Button>
            </Link>

        </div>
    );
}

export default UserProfile;