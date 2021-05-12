import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card,Button,Col,Row} from 'react-bootstrap'
import axios from 'axios'
class ShowBlog extends Component {
    constructor(props){
        super(props)
        this.state={
            blog:[],
            isLoaded:false
        }
    }


    componentDidMount = async () => {
        console.log("this called")
        let response = await axios.get(`http://127.0.0.1:5000/blog`)

        console.log(response)
        this.setState({ blog: response.data.data,isLoaded:true })

    }
    deleteBlog = async(id) =>{
        let response = await axios.delete(`http://127.0.0.1:5000/blog/${id}`)
        let d = this.state.blog.filter(b =>{
            return b._id!=id
        })
        this.setState({blog:d})
        this.props.location.pathname="/blog"
        
    }
    
    render() {
        return (
            <div className="container">
                
                <Link to="/addblog">Add blog</Link>
                Show Blog
                {this.state.isLoaded ? null : <h2>Loading.......</h2>}
                <Row>
                    
                {this.state.blog.map(b =>(
                   
                    <Col className="my-3">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`http://127.0.0.1:5000/${b.blog_image}`}/>
                    <Card.Body>
                        <Card.Title>{b.blog_content}</Card.Title>
                        <Card.Text>
                            {b.blog_description}
                        </Card.Text>
                        <Row>
                        <Col md={4}>
                        <Link to={{pathname:`/editblog`, editData:b}}>
                        <Button variant="primary" size="sm">Update</Button>
                        </Link>
                        </Col>
                        <Col>
                        
                        <Button variant="danger" size="sm" onClick={()=>this.deleteBlog(b._id)}>Delete</Button>
                      
                        </Col>

                        </Row>
                    </Card.Body>
                </Card>
                </Col>
                ))}
                </Row>
            </div>
        );
    }
}

export default ShowBlog;