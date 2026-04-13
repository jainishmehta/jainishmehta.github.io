import React, { Component } from 'react';
import UWlogo from "./UWlogo.png"


class Education extends Component {
    render() {
        return(
            <div className="resume-education font">
                <div className="resume-education-logo-wrap">
                    <img className="uwlogo" src={UWlogo} alt="University of Waterloo" />
                </div>
                <div className="resume-education-text">
                    <h4>{this.props.schoolName}</h4>
                    <p><i>{this.props.startYear}-{this.props.endYear}</i></p>
                    <p>{this.props.schoolDescription}</p>
                </div>
            </div>
        )
    }
}

export default Education;
