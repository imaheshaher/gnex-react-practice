import React, { useState } from 'react';

function UpdateUser(props) {
    const [user,setUser]=useState(props.location.user)
    console.log(props)
return (
        <div>
            
        </div>
    );
}

export default UpdateUser;