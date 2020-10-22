import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Fade from "react-reveal/Fade";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
          <div className="projects-grid ">
            <Card
                border shadow={5} style={{minWidth: '450', left:'100px'}}>
              <CardTitle
                  className="smartvision"
                  style={{
                color: '#fff',
                height: '176px'
              }}>SmartVision</CardTitle>
              <CardText>
                The goal of this project was to help disabled individuals interact with their surroundings using a
                software that takes in images and converts it into text that is later converted into speech. I got
                hands-on experience with UI/UX designs, iOS mobile applications, and first-time exposure to Swift. I
                also learned more about computer vision and how to use Apple’s Vision framework and CoreML models for
                image recognition.
              </CardText>
              <CardActions  style={{
                textAlign:'center'
              }} border>
                <Button href='https://github.com/jainishmehta/ObjectRecognition' colored>GITHUB</Button>
              </CardActions>
              <CardActions  style={{
                textAlign:'center'
              }} border>
                <img style={{height:'100', width:'75'}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/smartv.PNG")} alt="cannot display"
                />
              </CardActions>
              <CardText style={{
                textAlign:'center'
              }} border>
                <i>
                  <strong>

                    Technologies Involved: Apple's Vision API, Swift, git (Github)

                  </strong>

                </i>
              </CardText>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', left:'225px'}}>
              <CardTitle
                  className="aktiv"
                  style={{
                    color: '#fff',
                    height: '176px'
                   }}>Aktiv</CardTitle>
              <CardText>
                This project involved creating a robot that received an input and typed the response onto a computer
                keyboard. This required mapping the keyboard and maintaining accuracy using a PID controller. At the
                end, we also tried to use computer vision open source code to get sign language as the user input. This
                was written in Python and slightly modified for our purposes (nonetheless, it didn’t work with this
                input too well).
              </CardText>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{height:'100', width:'60'}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/Aktiv1.PNG")} alt="cannot display"
                />
               </CardActions>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{height:'80', width:'20'}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/Aktiv2.PNG")} alt="cannot display"
                />
              </CardActions><CardActions style={{
              textAlign:'center'
            }} border>
              <img style={{height:'80', width:'20'}}
                   src={require("C:/Users/jaini/react-portfolio/src/components/Aktiv3.PNG")} alt="cannot display"
              />
            </CardActions>
              <CardText style={{
                textAlign:'center'
              }} border>
                <i>
                  <strong>

                    Technologies Involved: C++. RobotC, some Python, mechanical modelling

                  </strong>

                </i>
              </CardText>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>

            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', left:'100px', margin:'auto'}}>
              <CardTitle
                  className="thrifter"
                  style={{
                color: '#fff',
                height: '176px',
                 }}>Thrifter</CardTitle>
              <CardText>
                This project aimed to encourage users to thrift shop in order to minimize the impacts of fast fashion on
                the environment. This web application worked by finding the most optimal match between a database of
                business-side clothing and a picture of clothing that a user inputs. This involved using Google Cloud
                Platform Vision API to convert each picture into a set of tags. A MongoDB database was used to store the
                business-side clothing. The backend server filtered each piece of clothing based on relevant manual tags
                in order to “clean the data” and determine which type of clothing the API interpreted it to be. Then, a
                KNN supervised algorithm was ran in a Express.js server to find the optimal match.
              </CardText>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <Button href="https://github.com/Wmeng98/HackLassonde-Thrifter" colored>GitHub</Button>
              </CardActions>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{height:'100', width:'60'}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/thrifter1.PNG")} alt="cannot display"
                />
              </CardActions>
              <CardActions  border>
                <img style={{height:'100', width:'30'}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/thrifter2.PNG")} alt="cannot display"
                />
              </CardActions>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{height:'100', width:'30'}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/thrifter3.PNG")} alt="cannot display"
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
                <IconButton name="share"/>
              </CardMenu>
            </Card>
          </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
          <div className="projects-grid ">
            <Card shadow={5} style={{minWidth: '450', left:'100px'}}>
              <CardTitle
                  className="rapid-prototyping"
                  style={{
                color: '#fff',
                height: '176px',
                }}>Rapid Prototyping</CardTitle>
              <CardText>
                I worked alongside a graduate biomedical engineering student on a study about rapid prototyping cardiac
                anatomy of patients with congenital heart disease to be used as an education tool for surgeons.
                I performed tests and created models to determine optimization for transparency, 3D printing material,
                nozzle and bed temperature, and cooling systems.
              </CardText>
              <CardActions style={{
                textAlign:'center'
              }} border>
              </CardActions>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{height:'100'}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/3dprinting1.PNG")} alt="cannot display"
                />
              </CardActions>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{height:'100'}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/3dprinting2.PNG")} alt="cannot display"
                />
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', left:'230px'}}>
              <CardTitle
                  className="ceyc"
                  style={{
                color: '#fff',
                height: '176px'
              }}>City of Edmonton Youth Council</CardTitle>
              <CardText>
                I was honored to serve in the health and wellness subcommittee wherein I was able to create projects that destigimized mental health, as well as encourage healthy lifestyles for physical health. I worked on surveying people after StepUPYEG was launched. This project aimed to revamp the University of Alberta staircase with motivating messages to promote well-being. I also led discussions about the planning, logistics, and implementation of SpotlightYEG that aimed to normalize mental health discussions as youth express themselves and their stories through fine arts . Through this, I was able to pursue a passion of mental health and learn more about leadership.
              </CardText>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/ceyc.PNG")} alt="cannot display"
                />
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', left:'100px', margin:'auto'}}>
              <CardTitle
                  className="waterloop"
                  style={{
                color: '#fff',
                height: '176px',
               }}>Waterloop Design Team</CardTitle>
              <CardText>
                I worked for the mechanical and embedded systems subteams for Waterloop. I created a design for the battery enclosure and braking plates (braking system) for the Hyperloop using Solidworks, considering requirements such as materials and location of holes to fit pins. I also worked on figuring out how to receive responses from a RobotEQ controller using an Arduino and CAN-bus principles. Additionally, I was required to interpret information about an incremental rotary encoder using C programming.
              </CardText>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <Button href="https://github.com/jainishmehta/RotaryEncoder" colored>GitHub</Button>
              </CardActions>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{height:'100'}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/waterloop1.PNG")} alt="cannot display"
                />
              </CardActions>
              <CardActions style={{
                textAlign:'center'
              }} border>
                <img style={{height:'100'}}
                     src={require("C:/Users/jaini/react-portfolio/src/components/waterloop2.PNG")} alt="cannot display"
                />
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
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


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


        </div>
    )
  }
}
export default Projects;
