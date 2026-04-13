import React, {Component, useState} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from '../components/skills';
import Transcript from '../components/Undergrad_Transcript_3B.pdf'
import Pdf from '../components/projectportfolio.pdf';
import Resum from '../components/J_Mehta_Resume__.pdf';
import Fade from "react-reveal/Fade";
import astronaut from "../components/astronaut.png"
import redcanari from "../components/redcanari.png"
import manulife from "../components/manulife.png"
import mcsses from "../components/missioncontrol.png"
import teradata from "../components/teradata.png"
import nvidia from "../components/nvidia.png"
import coinbase from "../components/coinbase.png"
import cityofedmonton from "../components/cityofedmonton.png"


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
          <a href={Resum} target="_blank" rel="noopener noreferrer" className="button button5">Resume</a>
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
                Currently looking for 2023 new grad internships!

              </p>
              <hr style={{borderTop: '3px solid brown', width: '100%'}}/>
              <h5>Phone</h5>
              <p>(519) 781-4847</p>
              <h5>Email</h5>
              <p>jainishmehta09@gmail.com</p>
              <hr style={{borderTop: '3px solid brown', width: '100%'}}/>
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2 className="resume-h2-education">Education</h2>

              <Education
                  startYear={2018}
                  endYear={2023}
                  schoolName="University of Waterloo"
                  schoolDescription="Candidate for Honours Mechatronics Engineering, Co-op with an Option in Artifical Intelligence"
              />

              <hr style={{borderTop: '3px solid red'}} />

              <h2 className="resume-h2-experience">Experience</h2>

              <div className="resume-experience">
                <div className="resume-experience-row">
                  <div className="resume-experience-card">
                    <div className="resume-experience-logo-wrap">
                      <img className="logo" src={coinbase} alt="" />
                    </div>
                    <h4>Coinbase - Data Engineer</h4>
                    <div className="resume-experience-dates">May 2022 – Aug 2022</div>
                    <div className="resume-experience-location">San Francisco, California (Remote)</div>
                    <p>TBH</p>
                  </div>
                </div>

                <div className="resume-experience-row">
                  <div className="resume-experience-card">
                    <div className="resume-experience-logo-wrap">
                      <img className="logo" src={nvidia} alt="" />
                    </div>
                    <h4>NVIDIA - Backend Software Engineer </h4>
                    <div className="resume-experience-dates">Jan 2022 – Apr 2022</div>
                    <div className="resume-experience-location">Santa Clara, California (Remote)</div>
                    <p> Developed new functionalities involving tensors, python codelets, python bindings, and .yaml graph files. </p>
                  </div>
                </div>

                <div className="resume-experience-row">
                  <div className="resume-experience-card">
                    <div className="resume-experience-logo-wrap">
                      <img className="logo" src={teradata} alt="" />
                    </div>
                    <h4>Teradata - Data Scientist </h4>
                    <div className="resume-experience-dates">May 2021 – Aug 2021</div>
                    <div className="resume-experience-location">San Diego, California (Remote)</div>
                    <p>Built polynomial regression model to determine future client CPU utilization. Used SQL and pandas to clean data.</p>
                  </div>
                </div>

                <div className="resume-experience-row">
                  <div className="resume-experience-card">
                    <div className="resume-experience-logo-wrap">
                      <img className="logo" src={redcanari} alt="" />
                    </div>
                    <h4>Red Canari - Full Stack Software Developer</h4>
                    <div className="resume-experience-dates">Aug 2020 – Dec 2020</div>
                    <div className="resume-experience-location">Ottawa, ON</div>
                    <p>Created a web application a chrome extension using React.js. Used AWS Amplify framework for backend services, including Cognito for user authenication.</p>
                  </div>
                </div>

                <div className="resume-experience-row">
                  <div className="resume-experience-card">
                    <div className="resume-experience-logo-wrap">
                      <img className="logo" src={manulife} alt="" />
                    </div>
                    <h4>Manulife Financial - Quality Services Software Engineering</h4>
                    <div className="resume-experience-dates">Jan 2020 – Apr 2020</div>
                    <div className="resume-experience-location">Waterloo, ON</div>
                    <p>Used Java to integrate Perfecto cloud platform into existing Selenium framework. This allowed teams to do more advanced mobile app and browser testing. I also worked with RESTful APIs and Postman to extract information about the Perfecto clouds, a solution that allows data visualization and analytics.</p>
                  </div>
                </div>

                <div className="resume-experience-row">
                  <div className="resume-experience-card">
                    <div className="resume-experience-logo-wrap">
                      <img className="logo" src={mcsses} alt="" />
                    </div>
                    <h4>Mission Control - Software Engineering</h4>
                    <div className="resume-experience-dates">May 2019 – Aug 2019</div>
                    <div className="resume-experience-location">Ottawa, ON</div>
                    <p>Used C++ to create various functions that aided in a broader path planning algorithm. I enhanced cubic spline interpolation and performed a calibration routine for an embedded systems project, wherein I needed to find the tilt of the rover as it climbs a hill.</p>
                  </div>
                </div>

                <div className="resume-experience-row">
                  <div className="resume-experience-card">
                    <div className="resume-experience-logo-wrap">
                      <img className="logo" src={cityofedmonton} alt="" />
                    </div>
                    <h4>City of Edmonton - Water Safety Instructor</h4>
                    <div className="resume-experience-dates">Jun 2016 – Aug 2018</div>
                    <div className="resume-experience-location">Edmonton, AB</div>
                    <p>Taught people of various background and ages, from 5 to 50, basics of swimming. Communicated with parents and gave end-of-term report cards.</p>
                  </div>
                </div>
              </div>
              <hr style={{borderTop: '3px solid red'}} />


            </Cell>
          </Grid>
        </div>
        </Fade>

    )
  }
}

export default Resume;
