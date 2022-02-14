
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home"
import Nav from './Nav'
import Services from './Services'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {


  return (
    <Router>
            <Nav/>
    <div className="App">
            <Home/>
            

      <Services/>
      </div>
      <Footer/>
    </Router>
  
  );
}

export default App;