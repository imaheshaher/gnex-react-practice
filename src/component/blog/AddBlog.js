import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class AddBlog extends Component {
    constructor(){
        super()
        this.state ={
            blog_content:"",
            blog_description:"",
            blog_image:[]
        }
    }
    handleOnChange = ({target}) =>{
        this.setState({[target.name]:target.value})
    }
    handleOnSubmit = () =>{
        let blog=this.state
        console.log("click")
        let formData = new FormData()
        formData.append('blog_content',this.state.blog_content)
        formData.append('blog_description',this.state.blog_description)

        formData.append('blog_image',this.state.blog_image)

        // this.props.addBlog(formData)
        this.addBlog(formData)
        
    }
    handleImage = (event) =>{
        this.setState({blog_image:event.target.files[0]})
    }
    addBlog = (blog) => {
        console.log(blog)
        axios.post(`http://127.0.0.1:5000/blog`, blog)
            .then(response =>{
                console.log(response)
            })

    }

    render() {
        return (
            <Form className="col-6 mx-auto my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Blog</Form.Label>
                    <Form.Control type="text" placeholder="Blog content" name = "blog_content" value={this.state.blog_content} onChange={this.handleOnChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Blog description</Form.Label>
                    <Form.Control as="textarea" rows={3} name = "blog_description" value={this.state.blog_description} onChange={this.handleOnChange}/>
                </Form.Group>
                <Form.File
                    id="custom-file"
                    label="Blog Image"
                    custom
                    className="my-3"
                    onChange={this.handleImage}
                />
                <Form.Group>
                    <Button variant="primary" type="button" className="my-3" onClick={this.handleOnSubmit}>
                        Submit
                </Button>
                </Form.Group>
            </Form>

        );
    }
}

export default withRouter(AddBlog);