import axios from 'axios';
import React, { useState } from 'react';
import {Form,Button,Container} from 'react-bootstrap'
import { useHistory } from 'react-router';
function LoginUser(props) {
    const [user,setUser] = useState({
        "email":"",
        "password":""
    })
    let history = useHistory()
    const handelOnChange = ({target}) =>{
        setUser((prevVal) => {
            return {
                ...prevVal,[target.name]:target.value
            }
        })
    }
    const loginUser = async(data) =>{
        let res = await axios.post(`http://127.0.0.1:5000/accounts/login`,data)
        console.log(res)
        var data = res.data
        if(data.status==true){
            localStorage.setItem('token',data.data.token)
            alert(data.message)
            history.push("/blog")
        }
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        loginUser(user);
    }
    return (
        <Container>
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={user.email} onChange={handelOnChange} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handelOnChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleOnSubmit}>
          Submit
        </Button>
      </Form>
      </Container>
    );
}

export default LoginUser;