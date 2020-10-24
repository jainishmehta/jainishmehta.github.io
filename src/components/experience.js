import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import threehundredninty from "./397.png"

class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <i>{this.props.startYear} - {this.props.endYear}</i>
                </Cell>
                <Cell col={8}>
                    <img className="UWlogo"
                         src={threehundredninty} alt="cannot display"
                    />
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                    <i>{this.props.city}</i>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;
