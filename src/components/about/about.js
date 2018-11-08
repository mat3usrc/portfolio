import React, { Component } from 'react';
export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt="Minha Foto" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>Sobre mim</h2>
                            <p>
                                {resumeData.aboutMe}
                            </p>
        
                        </div> {/* end .main-col */}
                    </div>
                </section> {/* About Section End*/}
            </React.Fragment>
        );
    }
}