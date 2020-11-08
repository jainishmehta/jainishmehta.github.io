import React, {Component, useState} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Transcript from './Undergrad_Transcript_2B.pdf'
import Pdf from './projectportfolio.pdf';
import Resum from './Jainish_Mehta-Coop_Resume_October.pdf'
import Fade from "react-reveal/Fade";
import astronaut from "./astronaut.png"
import redcanari from "./redcanari.png"
import manulife from "./manulife.png"
import mcsses from "./missioncontrol.png"
import cityofedmonton from "./cityofedmonton.png"


function makeFile() {
  return {
    mime: 'text/plain',
    filename: 'myexportedfile.txt',
    contents: 'all of the exports',
  }
}



class Resume extends Component {
  render() {
    return(
        <Fade cascade>
        <div className = "App">
          <button className="button button5" >
            <a href={Resum} target="_blank" className="item">Resume</a>
          </button>
          &nbsp;
          <button className="button button5" >
            <a href={Pdf} target="_blank" className="item">Portfolio</a>
          </button>
          &nbsp;
          <button className="button button5" >
            <a href={Transcript} target="_blank" className="item">Transcript</a>
          </button>
          <Grid>
            <Cell col={4}>
              <div style={{textAlign: 'center'}}>
                <img className="help"
                     src={astronaut} alt="cannot display"
                />
              </div>
              <Fade top cascade>
                <h2 style={{paddingTop: '2em'}}>JAINISH MEHTA</h2>
              </Fade>
              <h4 style={{color: 'brown'}}>Engineer</h4>
              <hr style={{borderTop: '3px solid brown', width: '100%'}}/>
              <p>An avid software engineer currently pursuing a
                Mechatronics Engineering degree at the University of Waterloo with an option of Artifical Intelligence.
                Currently looking for summer 2021 internships!

              </p>
              <hr style={{borderTop: '3px solid brown', width: '100%'}}/>
              <h5>Phone</h5>
              <p>(519) 781-4847</p>
              <h5>Email</h5>
              <p>jainishmehta09@gmail.com</p>
              <hr style={{borderTop: '3px solid brown', width: '100%'}}/>
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>

              <Education
                  startYear={2018}
                  endYear={2023}
                  schoolName="University of Waterloo"
                  schoolDescription="Candidate for Honours Mechatronics Engineering, Co-op with an Option in Artifical Intelligence"
              />

              <hr style={{borderTop: '3px solid red'}} />

              <h2>Experience</h2>


              <Grid>
                <Cell col={8}>
                  <img className="logo"
                       src={redcanari} alt="cannot display"
                  />
                  <h4 style={{marginTop:'0px'}}>Red Canari - Full Stack Software Developer</h4>
                  <i>Ottawa, ON</i>
                  <p>Created a web application a chrome extension using React.js. Used AWS Amplify framework for backend services, including Cognito for user authenication.</p>
                </Cell>
                <Cell col={4}>
                  <i>Aug 2020 - present</i>
                </Cell>
              </Grid>
              <Grid>
                <Cell col={8}>
                  <img className="logo"
                       src={manulife} alt="cannot display"
                  />
                  <h4 style={{marginTop:'0px'}}>Manulife Financial - DevOps Software Engineering</h4>
                  <i>Waterloo, ON</i>
                  <p>Used Java to integrate Perfecto cloud platform into existing Selenium framework. This allowed teams to do more advanced mobile app and browser testing. I also worked with RESTful APIs and Postman to extract information about the Perfecto cloud to query onto Grafana, a solution that allows data visualization and analytics.</p>
                </Cell>
                <Cell col={4}>
                  <i>Jan 2020 - Apr 2020</i>
                </Cell>
              </Grid>
              <Grid>
                <Cell col={8}>
                  <img className="logo"
                       src={mcsses} alt="cannot display"
                  />
                  <h4 style={{marginTop:'0px'}}>Mission Control Space Services - Robotics/Software Engineering</h4>
                  <i>Ottawa, ON</i>
                  <p>Used C++ to create various functions that aided in a broader path planning algorithm. I solved complex math challenges, such as cubic spline interpolation, that involved linear algebra and numerical methods. I also did a calibration routine for an embedded systems project, wherein I needed to find the tilt of the rover as it climbs a hill.</p>
                </Cell>
                <Cell col={4}>
                  <i>May 2019 - Aug 2019</i>
                </Cell>
              </Grid>
              <Grid>
                <Cell col={8}>
                  <img className="logo"
                       src={cityofedmonton} alt="cannot display"
                  />
                  <h4 style={{marginTop:'0px'}}>City of Edmonton - Water Safety Instructor</h4>
                  <i>Edmonton, AB</i>
                  <p>Taught people of various background and ages, from 5 to 50, basics of swimming. Communicated with parents and gave end-of-term report cards.</p>
                </Cell>

                <Cell col={4}>
                  <i>Jun 2016 - Aug 2018</i>
                </Cell>
              </Grid>
              <hr style={{borderTop: '3px solid red'}} />


            </Cell>
          </Grid>
        </div>
        </Fade>

    )
  }
}

export default Resume;
