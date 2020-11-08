import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import UWlogo from "./UWlogo.png"


class Education extends Component {
    render() {
        return(
            <Grid className="font" style={{margin:'auto'}}>
                <Cell col={8} style={{margin:'auto'}}>
                    <img className="uwlogo"
                         src={UWlogo} alt="cannot display"
                    />
                    <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                    <p><i>{this.props.startYear}-{this.props.endYear}</i></p>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;
