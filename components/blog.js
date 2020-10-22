import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Fade from "react-reveal/Fade";


class Blog extends Component {
    render() {
        return(
          <div>
            <List>
                <ListItem>
                    <ListItemContent className="icons" style={{textAlign:"center", fontSize: '30px'}}>
                        <Fade top cascade>
                            <h1 style={{textAlign:'center', font:'Times New Roman'}}>
                              <i>
                                <strong>Coming soon...</strong>
                              </i>
                                </h1>
                            <a href="https://medium.com/@jainishmehta09" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-medium" aria-hidden="true"/>
                            </a>
                        </Fade>
                    </ListItemContent>
                </ListItem>
            </List>
          </div>
        )
    }
}

export default Blog;
