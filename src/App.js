import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom'
import {Redirect, useHistory} from 'react-router'
import Header from "./component/Header";
import ImportBlog from "./component/blog/ImportBlog";
import ImportUser from "./component/user/ImportUser";
import LoginUser from "./component/user/LoginUser";
function App() {
  
  return (
    <Router>
      <Header />
      <Switch>
        <ImportBlog />
      </Switch>
      <Switch>
      <ImportUser />

      </Switch>
    </Router>
  );
}

export default App;
