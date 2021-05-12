import { Button } from 'bootstrap';
import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
function BlogFun(props) {
    const [blog,setBlog] = useState(props.blogList)
    return (
        <div>
          {blog.map(b=>(<li>
              
              {b.blog_content}

              
            </li>
          ))}
        </div>
    );
}

export default BlogFun;