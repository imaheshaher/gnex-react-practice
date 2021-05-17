import React, { Component } from 'react';
import { Route,Link ,withRouter} from 'react-router-dom'
import AddBlog from './AddBlog';
import ShowBlog from './ShowBlog';
import axios from 'axios'
import EditBlog from './EditBlog';
import BlogFun from './BlogFun';
class ImportBlog extends Component {
    constructor() {
        super()
        this.state = {
            blog: []
        }
    }
    addBlog = (blog) => {
        axios.post(`http://127.0.0.1:5000/blog`, blog)
            .then(response => {
                console.log(response.data)
                this.setState({ blog: [...this.state.blog, response.data.data] })

            })
    }
    

    render() {
        

        return (
            <>
                <Route exact path="/addblog"><AddBlog addBlog={this.addBlog} {...this.props}/></Route>
                {this.props.location.editData ? <Route exact path="/editblog"><BlogFun {...this.props} addBlog={this.addBlog} /></Route> :
                                <Route exact path="/blog"><ShowBlog {...this.props}/></Route>

                }
                <Route exact path="/delete" />
            </>
        );
    }
}

export default withRouter(ImportBlog);