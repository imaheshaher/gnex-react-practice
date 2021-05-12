import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import Header from "./component/Header";
import ImportBlog from "./component/blog/ImportBlog";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <ImportBlog />
      </Switch>
    </Router>
  );
}

export default App;
