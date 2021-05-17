
import React from 'react';
import { useState,useRef } from 'react';
import {Link,Redirect,useHistory} from 'react-router-dom'
import { Form, Button,Image } from 'react-bootstrap';
import axios from 'axios'
function BlogFun(props) {
    // const [blog,setBlog] = useState(props.blogList)
    const [blog,setBlog]=useState({ blog_content:props.location.editData.blog_content,
      blog_description:props.location.editData.blog_description,
      blog_image:props.location.editData.blog_image,
      bimage:props.location.editData.blog_image,
      _id:props.location.editData._id})
      let history=useHistory();
    const handleOnChange = ({target}) =>{
        setBlog((preVal) =>{
            return{
                ...preVal,[target.name]:target.value,
            }
        })
    }
    const handleOnSubmit = async() =>{
        console.log("click")
        let formData = new FormData()
        formData.append('blog_content',blog.blog_content)
        formData.append('blog_description',blog.blog_description)

        formData.append('blog_image',blog.blog_image)
        formData.append('_id',props.location.editData._id)

        // await props.addBlog(formData)
        addBlog(formData)
    }
    const handleImage = (event) =>{
        console.log(event.target.files[0])
        setBlog((preValue) =>{
            return{
                ...preValue,blog_image:event.target.files[0]
            }
        })
    }
    const addBlog = (blog) => {
        console.log(blog)
        axios.post(`http://127.0.0.1:5000/blog`, blog)
            .then(response => {
                console.log(response.data)
                history.push("/blog")



            })


    }
    return (
      <Form className="col-6 mx-auto my-3">
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Blog</Form.Label>
              <Form.Control type="text" placeholder="Blog content" name = "blog_content" value={blog.blog_content} onChange={handleOnChange}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Blog description</Form.Label>
              <Form.Control as="textarea" rows={3}  name = "blog_description" value={blog.blog_description} onChange={handleOnChange}/>
          </Form.Group>
          <Form.File
              id="custom-file"
              label="Blog Image"
              custom
              className="my-3"
              onChange={handleImage}
          />
           <Image src={`http://127.0.0.1:5000/${blog.bimage}`} height="170" width="180" rounded />
          <Form.Group>
              <Button variant="primary" type="button" className="my-3" onClick={handleOnSubmit}>
                  Submit
          </Button>
          </Form.Group>
      </Form>

  );
}

export default BlogFun;