import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuery } from '../helpers/getQuery';

const position = {
  initialOver800: {
    top: '61%',
    right: '-3%'
  },
  initialUnder800: {
    top: '70%',
    right: '-25%'
  },
  initialUnder500: {
    top: '70%',
    right: '-25%'
  },
  over800: {
    top: '61%',
    right: '3%'
  },
  under800: {
    top: '70%',
    right: '25%'
  },
  under500: {
    top: '70%',
    right: '25%'
  }
};

class IconGulp extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPosition: getQuery(position, true, this.props.location) };
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.startSlideAnimation();
    this.setQueryLoop();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  startSlideAnimation() {
    requestAnimationFrame(() => {
      this.setState({ currentPosition: getQuery(position, false, this.props.location) });
    });
  }

  onResize() {
    this.setState({ currentPosition: getQuery(position, false, this.props.location) });
  }

  setQueryLoop() {
    window.addEventListener('resize', this.onResize);
  }

  render() {
    return (
      <svg className="icon heroku" style={ this.state.currentPosition } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <g fill="#6762a6">
          <path d="M114 13.9c0-6.6-5.3-11.9-11.9-11.9h-76.2c-6.6 0-11.9 5.3-11.9 11.9v100.3c0 6.6 5.3 11.9 11.9 11.9h76.3c6.6 0 11.9-5.3 11.9-11.9v-100.3zm-4 .1v99.3c0 4.7-3.5 8.7-8.2 8.7h-75.3c-4.7 0-8.5-4-8.5-8.7v-99.3c0-4.7 3.9-8 8.5-8h75.2c4.7 0 8.4 3.6 8.4 8.3l-.1-.3zM37 108.7l14.1-14.1-14.1-14.1zM51 47.8v-29.4l-13.9.1s.1 45.9.2 45.7c42.8-16.7 39.7-4.8 39.7-4.8v49.4l-.1.2h13.1v-49.5c0-27.1-39-11.7-39-11.7zM70 36h14.8c8-10 10.7-17 10.7-17h-15.3s-4.9 11-10.2 17z"/>
        </g>
      </svg>
    );
  }
}

IconGulp.propTypes = {
  location: PropTypes.string
};

export default IconGulp;
