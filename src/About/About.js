import React, { Component } from 'react';
import { AboutContainer } from './About.style'
import { CenterAlignedHeading } from '../Common/Common.style'

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <CenterAlignedHeading>About Me</CenterAlignedHeading>
        <p>Hello! I am a game developer and graphics programmer currently pursuing the Masters in Game Design and Development degree at Rochester Institute of Technology.
          I love both playing and making games and spend most of my free time trying to understand and implement different rendering techniques in my sandbox engine. 
          Besides That, I also have experience with AR/VR, Full stack application development and network programming
        </p>
      </AboutContainer>
    );
  }
}

export default About;