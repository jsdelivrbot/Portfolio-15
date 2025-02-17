import React from 'react';
import PropTypes from 'prop-types';
import Background from '../Background';
import Icons from '../Icons';

const About = ({location}) => {
  const profilePic = require('./profile-pic.jpg');

  return (
    <div className="container">
      <Background />
      <div className="about-container">
        <img className="profile-pic" src={ profilePic } alt="My photo" />
        <p className="about-me">
          Hi, I'm Niko, a web developer. I'm located in Canada but wishing to relocate to Berlin, Germany one day(soon) or elsewhere in Canada/USA!
          Coding is my passion, I can't stop thinking about it and I'm excited to start my career as a frontend web developer!
        </p>
      </div>
      <Icons location={ location.pathname } />
    </div>
  );
};

About.propTypes = {
  location: PropTypes.object
};

export default About;
