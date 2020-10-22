import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Fade from "react-reveal/Fade";


class Contact extends Component {
  render() {
    return(
      <div className="contact-body" style={{textAlign: 'center'}}>
      <Fade bottom cascade>
            <h2>Get In Touch</h2>
      </Fade>
            <hr/>
        <i>
          Have a suggestion, want to work together, or simply want to chat?

          Feel free to contact me!</i>
              <List >
                <ListItem>
                  <ListItemContent className="icons" style={{textAlign:"center", fontSize: '30px'}}>
                    <i  className="fa fa-phone-square" aria-hidden="true"/>
                    &nbsp;
                    (519) 781 4847
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="icons" style={{fontSize: '30px'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    &nbsp;
                    jainishmeht09@gmail.com, jm3mehta@uwaterloo.ca
                  </ListItemContent>
                </ListItem>
              </List>
      </div>
    )
  }
}

export default Contact;
