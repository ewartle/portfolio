import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

 
 class PortfolioPage extends Component {
 
  render(){
     return(
       <div>
         <Container>
          <Row>
          <h4 className = "center-align teal-text text-darken-1">Portfolio Gallery</h4>
          <div className="divider"></div>
          </Row>
          <Row>

              <Col size = "m6">
              <h6 className="header">Happy Choice</h6>
              <div className="card hoverable">
                  <div className="card-image">
                    <img src="/sun.png"/>
                  </div>
                  <div className="card-content">
                      <p>Happy Choice puts the power of an advanced decision making algorithm in the palm of your hand to maximize total group satisfaction.</p>
                    </div>
                    <div className="card-action">
                      <a href="https://happy-choice.herokuapp.com">Link</a>
                    </div>
                  </div>
                  
                  </Col>
          


              <Col size = "m6">
              <h6 className="header">Friend Finder</h6>
              <div className="card hoverable">
                  <div className="card-image">
                    <img className = "portImg" src="/friends.JPEG"/>
                  </div>
                  
                    <div className="card-content">
                      <p>Are you ready to meet a new friend?  Friend Finder helps you find a friend by using a carefully crafted set of questions that compares new users to existing users to make a friend match.  </p>
                    </div>
                    <div className="card-action">
                      <a href="https://mysterious-tundra-40129.herokuapp.com/">Link</a>
                    </div>
                  </div>
                  
              </Col>
          </Row>

           <Row>

              <Col size = "m6">
              <h6 className="header">NexTime</h6>
              <div className="card hoverable">
                  <div className="card-image">
                    <img className = "portImg" src="/list.JPEG"/>
                  </div>
                  
                    <div className="card-content">
                      <p>NexTime is a smart to-do list that alerts users when they are near a location where items on a to-do list can be completed.</p>
                    </div>
                    <div className="card-action">
                      <a href="https://nex-time.herokuapp.com/">Link</a>
                    </div>
                  </div>
                  
                  </Col>
       
         <Col size = "m6">
              <h6 className="header">Friday Night Roulette</h6>
              <div className="card hoverable">
                  <div className="card-image">
                    <img className = "portImg" src="/roulette.jpg"/>
                  </div>
                  
                    <div className="card-content">
                      <p>Are you willing to take a chance on your Friday Night?  Friday Night Roulette provides users with a unique and entertaining way to plan their evening. </p>
                    </div>
                    <div className="card-action">
                      <a href="https://stevensammon.github.io/friday-night/">Link</a>
                    </div>
                  </div>
                  
                  </Col>
          </Row>
          <Row>
          <h5 className = "center-align teal-text text-darken-1"> Want to see more?  Checkout my github profile <a href="https://github.com/ewartle" className = "teal-text text-darken-1" id="portLink" >here!</a>  </h5>
          </Row>
    </Container>
         
       </div>

     );
   }
 
 }
 export default PortfolioPage;
