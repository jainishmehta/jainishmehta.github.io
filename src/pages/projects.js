import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Fade from "react-reveal/Fade";
import smartv from "../assets/smartv.PNG";
import healthinformationrag1 from "../assets/HealthInformationRAG.jpg"
import objectlengthidentifier1 from "../assets/ObjectLengthIdentifier.jpg"
import threedprinting1 from "../assets/3dprinting1.PNG"
import threedprinting2 from "../assets/3dprinting1.PNG"
import ceyc from "../assets/ceyc.PNG";
import waterloop1 from "../assets/waterloop1.PNG";
import waterloop2 from "../assets/waterloop2.PNG";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
          <div className="projects-grid ">
            {/* Project 1 */}
            <Card shadow={10} style={{minWidth: '450', margin:'auto', marginTop:'0'}}>
              <Fade cascade>
              <CardTitle
                  className="stravahealthpipeline"
                  style={{
                    color: '#fff',
                    height: '176px'
                  }}>Strava Health Pipeline</CardTitle>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <Button href="https://github.com/jainishmehta/strava_pipeline" colored>GitHub</Button>
              </CardActions>
              <CardText>
                Created a pipeline to extract health information from Strava data to visualize activities data on a map.
              </CardText>
              <CardText style={{
                textAlign:'center'
              }} border>
                <i>
                  <strong>
                    Technologies Involved: Python, BigQuery, Great Expectations, Tableau
                  </strong>
                </i>
              </CardText>
              <CardMenu style={{color: '#fff'}}>
              </CardMenu>
              </Fade>
            </Card>

            {/* Project 2 */}
            <Card shadow={10} style={{minWidth: '450', margin:'auto', marginTop:'0'}}>
              <Fade cascade>
              <CardTitle
                  className="aktiv"
                  style={{
                    color: '#fff',
                    height: '176px'
                  }}>HealthInformationRAG</CardTitle>
              <CardText>
                This project involved building a RAG (Retrieval-Augmented Generation) system for health information retrieved from Mayo Clinic. It used a combination of a vector database and a language model to answer questions about health information.
              </CardText>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{height:'50', width:'5'}}
                     src={healthinformationrag1} alt="cannot display"
                />
              </CardActions>
              <CardText style={{
                textAlign:'center'
              }} border>
                <i>
                  <strong>

                    Technologies Involved: Python, Selenium, LLM, Langchain

                  </strong>

                </i>
              </CardText>
              <CardMenu style={{color: '#fff'}}>
              </CardMenu>
              </Fade>
            </Card>

            {/* Project 3 */}
            <Card shadow={10} style={{minWidth: '450', margin:'auto', marginTop:'0'}}>
              <Fade cascade>
              <CardTitle
                  className="thrifter"
                  style={{
                    color: '#fff',
                    height: '176px',
                  }}>Object Length Identifier</CardTitle>
              <CardText>
                This project aims to use computer vision to identify the length of an object in a picture using a reference object.
              </CardText>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <Button href="https://github.com/jainishmehta/ObjectLengthIdentifier" colored>GitHub</Button>
              </CardActions>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{height:'100', width:'10'}}
                     src={objectlengthidentifier1} alt="cannot display"
                />
              </CardActions>
              <CardText style={{
                textAlign:'center'
              }} border>
                <i>
                  <strong>

                    Technologies Involved: Google Cloud Platform's Vision API, Javascript (Express.js), HTML, CSS, some MongoDB, supervised learning, git (Github)

                  </strong>

                </i>
              </CardText>
              <CardMenu style={{color: '#fff'}}>
              </CardMenu>
              </Fade>
            </Card>
          </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
          <div className="projects-grid ">
            <Card shadow={10} style={{minWidth: '450', margin:'auto', marginTop:'0'}}>
              <Fade cascade>
              <CardTitle
                  className="waterloop"
                  style={{
                    color: '#fff',
                    height: '176px',
                  }}>Waterloop Design Team</CardTitle>
              <CardText>
                I worked for the mechanical and embedded systems subteams for Waterloop. I helped with a team to create a design for the battery enclosure and braking plates (braking system) for the Hyperloop using Solidworks (while I helped with the Mechanical team), considering requirements such as materials and location of holes to fit pins. I also worked with the embedded software team on figuring out how to receive responses from a RobotEQ controller using an Arduino and CAN-bus principles. Additionally, I was required to interpret information about an incremental rotary encoder using C programming.
              </CardText>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <Button href="https://github.com/jainishmehta/RotaryEncoder" colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              </CardMenu>
              </Fade>
            </Card>
          </div>
      )
    }
  }

  render() {
    return (
        <div>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>SOFTWARE</Tab>
            <Tab>OTHER</Tab>
          </Tabs>
              {this.toggleCategories()}
        </div>
    )
  }
}
export default Projects;