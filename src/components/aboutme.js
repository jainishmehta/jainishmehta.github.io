import React, { Component } from 'react';
import {Cell, Grid, Layout} from "react-mdl";
import Fade from "react-reveal/Fade";
import profilepic from "./../profilepic.PNG"
import montreal from "./montreal.png"
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
          <img className="profilepic"
               src={profilepic} alt="cannot display"
          />
          <Fade top cascade>
            <h1>Background</h1>
          </Fade>
          <p> Hi and welcome! I was born in Ahmedabad, India and raised in Mississauga, Ontario and Edmonton, Alberta. I went to various schools, including Meyokumin,
            Grandview Heights Junior High School, and Old Scona Academic High School. I enjoyed learning in general; there was a sense of fulfillment in finding the deeper meanings in novels,
            understanding the significance and context of major world events, problem-solving math questions, and understand the world through a scientific lens. It gave me some context of the world we grew up in the world that is handed to us.
            And with that knowledge, I find a sense of responsibility to leave the world a little better than the state we were given. This means advocating for equal rights, supporting climate change initiatives, and considering the global community we are part of.
            That's my career goal - to make a meaningful impact in a manner that I am proud of and feel I am authenicately me. That's where my journey begins.
          </p>
          <Fade top cascade>
            <h1>Hobbies and Interests</h1>
          </Fade>
          <p>Some of my hobbies include music, basketball, soccer, web-surfing and travelling. I love trying new things, these include skiing, stargazing, learning new languages, and more!  </p>
          <img className="montreal"
               src={montreal} alt="cannot display"
          /> &nbsp;
          <img className="profilepic"
               src={nintyone} alt="cannot display"
          /> &nbsp;
          <img className="niagarafalls"
               src={niagara} alt="cannot display"
          /> &nbsp;
          <img className="profilepic"
               src={threehundred} alt="cannot display"
          /> &nbsp;
          <img className="profilepic"
               src={threehundredninty} alt="cannot display"
          /> &nbsp;
          <img className="trophy"
               src={trophy} alt="cannot display"
          /> &nbsp;
          <img className="profilepic"
               src={syrup} alt="cannot display"
          /> &nbsp;
        </div>
    )
  }
}

export default About;
