import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <section id="resume">
                    {/* Skills
      ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Habilidades</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>
                                {resumeData.textSkills}  
                            </p>

                            <div className="container-list">
                                <div className="list">
                                    <h1>Programação</h1>
                                    <ul className="skills">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>PHP</li>
                                        <li>JavaScript</li>
                                        <li>SQL</li>
                                    </ul>
                                </div>
                                <div className="list">
                                    <h1>Frameworks e Libs</h1>
                                    <ul className="skills">
                                        <li>Laravel</li>
                                        <li>Bootstrap</li>
                                        <li>jQuery</li>
                                        <li>React (Esse site foi feito em React!)</li>
                                    </ul>
                                </div>
                            </div>
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section> {/* Resume Section End*/}
            </React.Fragment>
        );
    }
}