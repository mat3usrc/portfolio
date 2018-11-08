import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Works />
        <Contact />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
