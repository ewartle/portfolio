import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import './App.css';
import Nav from "./components/Nav";




class App extends Component {

render() {
    return ( 
      <Router>
        <div>

      <Nav /> 
      <Switch>
      <Route exact path="/" component={About} />   
       <Route exact path="/contact" component={Contact} />
       <Route exact path = "/portfolio" component = {PortfolioPage}/>   
      

 
       
        
     </Switch>
        </div> 
        </Router>
    );
};
}
export default App;
