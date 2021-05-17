import React, { useState } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router';
function AddUser(props) {
    const [formdata,setFormdata] =useState(props.location.user)
    let history = useHistory()
    const handelOnChange = ({target}) =>{
        const{name,value}=target 
        setFormdata((preVal) =>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    }
    const handleOnSubmit = async(event) =>{
        event.preventDefault();
        let response = await axios.post(`http://127.0.0.1:5000/accounts/register`,formdata)
        let data=response.data

        console.log(data)
        if(data.status==true){
        console.log(data)
            alert("data upload sucess..")
            history.push("/users")
        }
        else {
        console.log(data)

            alert(data.message)
        }

    }

    return (
        <Container>
        <Form >
            <Form.Row >
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" name="email" value={formdata ? formdata.email:null} onChange={handelOnChange}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={formdata? formdata.password:null} onChange={handelOnChange}/>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="button" onClick={handleOnSubmit}>
                Submit
            </Button>
        </Form>
        </Container>
    );
}

export default AddUser;