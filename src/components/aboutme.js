import React, { Component } from 'react';
import {CardTitle, CardActions, Card, Cell, Grid, Layout, CardText, CardMenu, Button} from "react-mdl";
import Fade from "react-reveal/Fade";
import profilepic from "./../profilepic.PNG"
import montreal from "../montreal.PNG"
import nintyone from "./091.png"
import niagara from "./niagarafalls.png"
import threehundred from "./376.png"
import threehundredninty from "./397.png"
import trophy from "./trophy.png"
import syrup from "./../syrup.png"




class About extends Component {
  render() {
    return(
        <div style={{textAlign: 'center'}}>
            <Fade cascade>
          <img className="profilepic"
               src={profilepic} alt="cannot display"
          />

            <h1><i><strong>Background</strong></i></h1>

          </Fade>
          <p>
              Hello! My name is Jainish Mehta and a Mechatronics Engineering student at the University of Waterloo.
              I was born in Ahmedabad, India and raised in Mississauga, Ontario and Edmonton, Alberta. I went to various schools,
              I was born in Ahmedabad, India and raised in Mississauga, Ontario and Edmonton, Alberta. I went to various schools,
              including Meyokumin, Grandview Heights Junior High School, and Old Scona Academic High School.
              I enjoyed learning in general; there was a sense of fulfillment in finding the deeper
              meanings in novels, understanding the significance and context of major world events,
              problem-solving math questions, and understand the world through a scientific lens. It gives
              context of the world we grew up in. And with that knowledge, there is a sense of responsibility to leave the
              world a little better than the state we were given. This means advocating for equal rights, supporting climate
              change initiatives, and considering the global community we are part of. That's my career goal - to make a
              meaningful impact in a manner that I am proud of and feel I am authentically me. That's where my journey begins.
          </p>
          <Fade cascade>
              <h1><i><strong>Hobbies and Interests</strong></i></h1>
          </Fade>
          <p>Some of my hobbies include music, basketball, soccer, web-surfing and travelling. I love trying new things, these include skiing, stargazing, learning new languages, and more!  </p>
            <div className="projects-grid ">
                <Card shadow={10} style={{width: '250px', margin:'auto', marginTop:'0'}}>
                    <Fade cascade>
                        <img className="montreal"
                             src={montreal} alt="cannot display"
                        />

                    </Fade>
                </Card>
                <Card shadow={10} style={{width: '400px', height: '400px'}}>
                    <Fade cascade>
                    <img className="profilepic"
                         src={nintyone} alt="cannot display"
                    />

                    </Fade>
                </Card>

                <Card shadow={10} style={{width: '200px', margin:'auto', marginTop:'0'}}>
                    <Fade cascade>
                        <img className="niagarafalls"
                             src={niagara} alt="cannot display"
                        />

                    </Fade>
                </Card>
                <Card shadow={10} style={{width: '400px', margin:'auto', marginTop:'0'}}>
                    <Fade cascade>
                <img className="profilepic"
                     src={threehundred} alt="cannot display"
                />
                </Fade>
            </Card>
            </div>
            <div className="projects-grid ">
                <Card shadow={10} style={{width: '400px',margin:'auto', marginTop:'0'}}>
                    <Fade cascade>
                        <img className="profilepic"
                             src={threehundredninty} alt="cannot display"
                        />
                    </Fade>
                </Card>

                <Card shadow={10} style={{width: '320px',margin:'auto', marginTop:'0'}}>
                    <Fade cascade>
                        <img className="trophy"
                             src={trophy} alt="cannot display"
                        />
                    </Fade>
                </Card>
                <Card shadow={10} style={{width: '270px',margin:'auto', marginTop:'0'}}>
                    <Fade cascade>
                        <img className="quebec"
                             src={syrup} alt="cannot display"
                        />
                    </Fade>
                </Card>
            </div>
          &nbsp;
            </div>
    )
  }
}

export default About;
