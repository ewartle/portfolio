import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


 
 class About extends Component {
   
   render(){
     return(

            
       <div className = "body1">
        
        
           <Row>
                  
                            <Col size="m10 offset-m1">

                            <p> Hello! I am Lisa, and I am recent graduate of the Full Stack Web Development program at Georgia Tech University. </p>

                            <p>In 2014, after nearly 10 years of practicing law, I decided to take life in a different direction, and I joined the Peace Corps. As a Peace Corps volunteer, I lived and worked in a small rural community in Morocco with some of the most kind and generous people. Together, we created programming for youth to promote learning, healthy lifestyles, and girl empowerment.</p>

                            <p> I recently returned to the United States, and I am motivated to learn new skills in order to explore ways that technology can bring about social justice and empower people's lives. I am a reader, writer, tap dancer, and runner. I also enjoy traveling, spending time with friends and family, and making silly videos about my sister's pigs. Always, I love to laugh. </p>

                            <p> *If you are interested in learning more about my Peace Corps experience, please click <a class="link" href="http://magazine.wfu.edu/2016/01/11/from-attorney-to-peace-corps-volunteer/" target="_blank">here</a> and <a class="link" href="https://www.skirt.com/skirt-essays/a-zwin-heart/" target="_blank">here</a>. And if you are curious about the pigs, click <a class="link" href="./assets/images/Pigs.JPG" target="_blank">here</a>.* </p>
                            


                            </Col>
                        </Row>

                 

          
         
       </div>

  


     );
   }
 
 }
 export default About;
