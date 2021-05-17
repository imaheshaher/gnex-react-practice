import React, { Component } from 'react';
import { Form, Button,Image } from 'react-bootstrap';
import {useHistory,Redirect,withRouter} from 'react-router-dom'
class EditBlog extends Component {
    constructor(props){
        super(props)
        this.state ={
            blog_content:props.location.editData.blog_content,
            blog_description:props.location.editData.blog_description,
            blog_image:props.location.editData.blog_image,
            bimage:props.location.editData.blog_image,
            _id:props.location.editData._id
        }
    }
    handleOnChange = ({target}) =>{
        this.setState({[target.name]:target.value})
    }
    handleOnSubmit = async() =>{
        let blog=this.state
        console.log("click")
        let formData = new FormData()
        formData.append('blog_content',this.state.blog_content)
        formData.append('blog_description',this.state.blog_description)

        formData.append('blog_image',this.state.blog_image)
        formData.append('_id',this.props.location.editData._id)

        await this.props.addBlog(formData)
        this.props.location.pathname="/blog"
    //    return <Redirect to="/blog" />
        
    }
    handleImage = (event) =>{
        this.setState({blog_image:event.target.files[0]})
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
                 <Image src={`http://127.0.0.1:5000/${this.state.bimage}`} height="170" width="180" rounded />
                <Form.Group>
                    <Button variant="primary" type="button" className="my-3" onClick={this.handleOnSubmit}>
                        Submit
                </Button>
                </Form.Group>
            </Form>

        );
    }
}

export default EditBlog;