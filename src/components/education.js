import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import UWlogo from "./UWlogo.png"


class Education extends Component {
    render() {
        return(
            <Grid  className="text">
                <Cell col={4}>
                    <i>{this.props.startYear} - {this.props.endYear}</i>
                </Cell>
                <Cell col={8}>
                    <img className="uwlogo"
                         src={UWlogo} alt="cannot display"
                    />
                    <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;
