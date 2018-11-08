import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        {/* eslint-disable-next-line */} 
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">Sobre</a></li>
                            <li><a className="smoothscroll" href="#resume">Habilidades</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Projetos</a></li>
                            <li><a className="smoothscroll" href="#contact">Contato</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">{resumeData.name}</h1>
                            <h3>{resumeData.role}</h3>
                            <hr />
                            <ul className="social">
                                <li><a href={resumeData.linkedin} rel="noopener noreferrer" target="_blank" ><i className="fab fa-linkedin" /></a></li>
                                <li><a href={resumeData.github} rel="noopener noreferrer" target="_blank"><i className="fab fa-github" /></a></li>
                                <li><a href={resumeData.twitter} rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter" /></a></li>
                                <li><a href={resumeData.facebook} rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header> {/* Header End */}
            </React.Fragment>
        );
    }
}