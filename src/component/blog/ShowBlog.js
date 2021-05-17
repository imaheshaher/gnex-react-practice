import React, { Component } from 'react';
import { Link,Redirect,withRouter } from 'react-router-dom'
import {Card,Button,Col,Row,Spinner} from 'react-bootstrap'
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
        var token = localStorage.getItem("token")
        if(!token){
            this.props.history.push("/login")
        }
        var headers = {
            headers: {
            Authorization: token //the token is a variable which holds the token
          }
        }
         axios.get(`http://127.0.0.1:5000/blog`,headers)

        .then(response => {
            console.log(response.data)
            if(response.data.status==true)
           {
               this.setState({ blog: response.data.data,isLoaded:true });
           }
           else {
            //    alert(response.data.message)
              this.props.history.push("/login")
               
           }
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    componentDidUpdate = async (prevProps,prevState) => {
        
        

    if(JSON.stringify(prevState.blog) !== JSON.stringify(this.state.blog)) {
        console.log(JSON.stringify(prevState.blog) )
        console.log( this.state.blog)

        var token = localStorage.getItem("token")
        if(!token){
            this.props.history.push("/login")
        }
        var headers = {
            headers: {
            Authorization: token //the token is a variable which holds the token
          }
        }
           axios.get(`http://127.0.0.1:5000/blog`,headers)

          .then(response => {
              console.log(response.data)
              if(response.data.status==true)
             {
                 this.setState({ blog: response.data.data,isLoaded:true });
             }
             else {
                 alert(response.data.message)
                this.props.history.push("/login")
                 
             }
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    }   
    deleteBlog = async(id) =>{
        let response = await axios.delete(`http://127.0.0.1:5000/blog/${id}`)
        let d = this.state.blog.filter(b =>{
            return b._id!=id
        })
        this.setState({blog:d})
        // return <Redirect to="/blog" />
        
        
    }
    
    render() {
        return (
            <div className="container">
                
                <Link to="/addblog">Add blog</Link>
                Show Blog
                {this.state.isLoaded ? null :<Spinner animation="border" />}
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
                        <Col>
                        <Link to={{pathname:`/editblog`, editData:b}}>
                        <Button variant="primary" size="sm">Update</Button>
                        </Link>
                        </Col>
                        <Col xs={4}>
                        
                        <Button variant="danger" size="sm"  onClick={()=>this.deleteBlog(b._id)}>Delete</Button>
                      
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

export default withRouter(ShowBlog);