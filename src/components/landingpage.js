import React, { Component } from 'react';
import {Layout, Grid, Cell, Tab, Tabs} from 'react-mdl';
import Fade from 'react-reveal/Fade';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div><h1>C++, C, Python, Java, Javascript/Typescript, HTML, CSS, R, SQL</h1></div>


            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>React.js, Angular.js, Selenium, TestNG, Cucumber, Express.js</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>Git, AWS, RESTful APIs, Linux Ubuntu, Jenkins, Docker, Postman, RMarkdown/LATEX</h1></div>
            )
        }

    }
  render() {

    return(
        <Layout>
            <Grid className="landing-grid">
                <div>
                    <h1 className="header">
                        <Fade top cascade>
                            Hi, I'm Jainish Mehta!
                        </Fade>
                    </h1>
                </div>
                <div className="banner-text">
                  <h1>Software Engineer</h1>

                <hr/>
                <Grid  style={{background:'white'}}>
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>LANGUAGES</Tab>
                        <Tab>FRAMEWORKS/DB/TECHNOLOGIES</Tab>
                        <Tab>OTHER</Tab>
                    </Tabs>
                </Grid>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

            <div className="social-links">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/jainishmehta/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
                <a href="mailto:jainishmehta09@gmail" target="_blank">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>

              {/* Github */}
              <a href="https://github.com/jainishmehta" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

            </div>
                </div>
            </Grid>
        </Layout>
    )
  }
}

export default Landing;