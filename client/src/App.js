import React from 'react';
import {Navbar, Nav}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Connect from './components/Connect';

function App() {
  function logout(e) {
    e.preventDefault()
    console.log("logout")
    sessionStorage.removeItem('token')
    window.location.href='/'
  }
  return (
    <div className="App">
 <Navbar bg="light" variant="light">

    <Navbar.Brand>Medocil-admin</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link onClick={logout}>Logout</Nav.Link>
    </Nav>
  </Navbar>


 <Router>
          <Switch>
            <Route exact path="/" component={Connect} />
          </Switch>
        </Router> 


    </div>
  );


}


export default App;
