import React, { Component } from 'react';
import { Grid, Cell, Tab, Tabs } from 'react-mdl';
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      isTyping: false,
    };
  }

  componentDidMount() {
    // Check screen width to determine if typewriter effect should start
    if (window.innerWidth < 400) {
      this.setState({ isTyping: true });
    }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <div><h1>C++, C, Python, Java, Javascript/Typescript, HTML, CSS, Matlab, R, SQL</h1></div>;
    } else if (this.state.activeTab === 1) {
      return <div><h1>React.js, Selenium, TestNG, JUnit, GTest, Cucumber, Express.js</h1></div>;
    } else if (this.state.activeTab === 2) {
      return <div><h1>Git, AWS, RESTful APIs, Linux Ubuntu, Jenkins, Docker, Postman, RMarkdown/LATEX</h1></div>;
    }
  }

  renderTypewriter() {
    return (
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Hi, my name is Jainish Mehta!')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Welcome to my Website!')
            .start();
        }}
      />
    );
  }

  render() {
    const { isTyping } = this.state;

    let typewriterComponent = null;
    if (isTyping && window.innerWidth < 400) {
      typewriterComponent = (
        <div className="typewriter-container">
          {this.renderTypewriter()}
        </div>
      );
    } else {
      typewriterComponent = (
        <div className="typewriter-container">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Hi, my name is Jainish Mehta!')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Welcome to my Website!')
                .start();
            }}
          />
        </div>
      );
    }

    return (
      <Grid className="landing-grid">
        <div>
          <h1 className="header" style={{ textAlign: 'center' }}>
            <Fade top cascade>
              {typewriterComponent}
            </Fade>
          </h1>
          <div className="banner-text">
            <h2 className="header">Software Engineer</h2>
            <Grid>
              <Tabs
                activeTab={this.state.activeTab}
                onChange={(tabId) => this.setState({ activeTab: tabId })}
                ripple
                className="small-tabs"
              >
                <Tab className="tab1">LANGUAGES</Tab>
                <Tab className="tab2">FRAMEWORKS/DB</Tab>
                <Tab className="tab3">OTHER</Tab>
              </Tabs>
            </Grid>
            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/jainishmehta/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              <a href="mailto:jainishmehta09@gmail" target="_blank">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="https://github.com/jainishmehta" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}

export default Landing;
