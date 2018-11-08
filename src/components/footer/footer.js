import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                                <li><a href={resumeData.linkedin} rel="noopener noreferrer" target="_blank" ><i className="fab fa-linkedin" /></a></li>
                                <li><a href={resumeData.github} rel="noopener noreferrer" target="_blank"><i className="fab fa-github" /></a></li>
                                <li><a href={resumeData.twitter} rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter" /></a></li>
                                <li><a href={resumeData.facebook} rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook" /></a></li>
                            </ul>
                            <ul className="copyright">
                                <li>© Copyright 2018 Mateus Costa</li>
                                <li>Design by <a title="Styleshout" href="http://www.styleshout.com/" rel="noopener noreferrer" target="_blank">Styleshout</a></li>
                            </ul>
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer> {/* Footer End*/}
            </React.Fragment>
        );
    }
}