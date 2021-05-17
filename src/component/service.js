import axios from 'axios'
//l.https://jsonplaceholder.typicode.com/users
let baseUrl = 'http://127.0.0.1:5000/'
let token = localStorage.getItem("token")
var headers = {
    headers: {
    Authorization: token //the token is a variable which holds the token
  }
}

export const user = axios.get(`${baseUrl}accounts/user/profile`,headers)