import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Cell} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import jainishlogo from "./jainishlogo.PNG"

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header id="header-color"
                            title={<Link style={{textDecoration: 'none', textAlign:'left', color: 'white'}} to="/">
                                <img className="hello"
                                     src={jainishlogo} alt="cannot display"
                                /></Link>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/blogs">Blogs</Link>
                        </Navigation>
                    </Header>
                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;

