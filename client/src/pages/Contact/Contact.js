import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
 
 class Contact extends Component {
    constructor (props){
      super(props);
    
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      message: ""
     
   };
  }

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

sendEmail = event => {
     event.preventDefault();
     const email = this.state.email;
     const firstName = this.state.firstName;
     const lastName = this.state.lastName;
     const message = this.state.message;
     const NodeMailerInput = [email, firstName, lastName, message];
     console.log(NodeMailerInput)
    
    axios.post("/send", NodeMailerInput)
      .then((response)=>{
      })
      .catch((err)=> {
         console.log(err);
      });
     NotificationManager.success(`Your message has been sent.`, 'Success!', 3000);
};

  render(){
     return(
       <div className = "shadow">
        
         <Row>
          <form className="col m12">
            <div className="row">

            <h4 className = "center-align teal-text text-lighten-1">  Connect with Me </h4>

            </div>
            <div className="row">
              <div className="input-field col s6">
                <input 
                  id="first_name" 
                  type="text" 
                  class="validate" 
                  name="firstName" 
                  value={this.state.firstName}
                  onChange = {this.handleInputChange}/>
                <label for="first_name">First Name</label>
              </div>
              <div className ="input-field col s6">
                <input 
                  id="last_name" 
                  type="text" 
                  class="validate" 
                  name="lastName"
                  value={this.state.lastName}
                  onChange = {this.handleInputChange}/>
                <label for="last_name">Last Name</label>
              </div>
            </div>
           
            <div className="row">
              <div className="input-field col s12">
                <input 
                  id="email" 
                  type="email" 
                  class="validate" 
                  name="email"
                  value = {this.state.email}
                  onChange={this.handleInputChange}/>
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
                  <div class="input-field col s12">
                <textarea id="textarea" class="materialize-textarea" name="message" value = {this.state.message} onChange = {this.handleInputChange}></textarea>
                <label for="textarea">Message</label>
              </div>

                
            </div>
            <button className="btn waves-effect waves-light teal lighten-1" onClick={this.sendEmail} type="submit" name="action">Submit
              </button>
          </form>
    </Row>
    <NotificationContainer/>
       
       </div>

     );
   }
 
 }
 export default Contact;
