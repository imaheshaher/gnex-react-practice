import axios from 'axios';
import {Button,Col} from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UpdateUser from './UpdateUser';

function ShowUsers(props) {
    const [user,setUser]=useState([])
    const getUsers = () =>{
        axios.get("http://127.0.0.1:5000/accounts/register").then(response=>{
            let data = response.data.data
            setUser(data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getUsers();
    },[])
    
    return (
        <div>
            <div className="my-3">
                <Link to={"/register"}>
            <Button style={{float:'right'}}>Add User</Button>
            </Link>
            </div>
            
            {user.map(u=>(
                <li xs={4} ls={3}>{u.email}

                    <Link to={{pathname:"/register",user:u}} >
                    <Button className="mx-3">Update</Button>
                    </Link>
                </li>
            ))}
        </div>
    );
}

export default ShowUsers;