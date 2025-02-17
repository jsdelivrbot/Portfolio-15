import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuery } from '../helpers/getQuery';

const position = {
  initialOver800: {
    top: '48%',
    left: '-20%'
  },
  initialUnder800: {
    top: '71%',
    left: '-29%'
  },
  initialUnder500: {
    top: '71%',
    left: '-29%'
  },
  over800: {
    top: '48%',
    left: '20%'
  },
  under800: {
    top: '71%',
    left: '29%'
  },
  under500: {
    top: '71%',
    left: '29%'
  }
};

class IconRails extends Component {
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
      <svg className="icon rails" style={ this.state.currentPosition } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path fill="#a62c39" d="M17.444 125.054s.188-29.538.188-59.564c0-58.159-4.901-62.491 21.194-62.491h72.635v83.889c0 27.615 5.162 38.433-23.859 38.433-29.021.001-70.158-.267-70.158-.267z"/>
        <g transform="translate(-273.273 -435.955)">
          <linearGradient id="rails-a" gradientUnits="userSpaceOnUse" x1="681.437" y1="2170.426" x2="703.949" y2="2182.218" gradientTransform="matrix(1 0 0 -1 -320.773 2656.956)">
            <stop offset="0" stopColor="#fff"/>
            <stop offset="1" stopColor="#c0815e"/>
          </linearGradient>
          <path fill="url(#rails-a)" d="M350.603 449.926s4.655.932 8.688 7.757c4.034 6.826 25.444 59.886 25.444 59.886v-43.131l-19.858-32.27 5.585 6.827 10.55-8.689-13.653-.93-16.756 10.55z"/>
        </g>
        <g transform="translate(-273.273 -435.955)">
          <radialGradient id="rails-b" cx="668.118" cy="1679.3" r="38.406" gradientTransform="matrix(1 0 0 -1.582 -320.773 3155.877)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff"/>
            <stop offset="1" stopColor="#a94436"/>
          </radialGradient>
          <path opacity=".668" fill="url(#rails-b)" enableBackground="new" d="M309.335 439.686s30.719 20.479 45.613 24.513c14.894 4.035 30.408 8.378 30.408 8.378l-35.373 86.88 15.204.621 19.86-49.026-.622-71.676-75.09.31z"/>
          <path fill="#fff" fillOpacity=".44" d="M337.881 531.221l31.956 30.733-59.571-1.256s-1.861-18.927-1.241-28.856l3.723-9.929 25.133 9.308z"/>
        </g>
        <g>
          <path fillOpacity=".362" d="M94.085 125.365l-28.856-29.788-26.375-9.929-20.479-45.612 21.721-36.304-14.584-.621-5.896 5.586-2.172 4.344-1.552 112.945 78.193-.621z"/>
          <path opacity=".5" fill="#83222d" enableBackground="new" d="M111.773 77.89s-29.167 9.309-46.543 17.997c-17.376 8.688-26.685 29.787-26.685 29.787s37.234-1.861 51.197-1.241c13.963.621 20.479.621 21.72-18.927 1.241-19.548.311-27.616.311-27.616z"/>
        </g>
        <g fill="#fff">
          <path d="M26.435 96.422v18.326h4.674v-4.773l4.254 4.254h7.172l-5.688-5.688s4.093-.067 4.402-5.984c0-5.43-4.097-6.134-8.83-6.134h-5.984zm4.897 4.971h4.031v3.265h-4.031v-3.265z"/>
          <path d="M51.562 96.496c-2.559-.015-6.108.223-6.108 5.045v12.737h4.797v-3.116h4.65v3.042h4.822v-13.354c0-4.189-4.654-4.353-7.147-4.353l-1.014-.001zm-1.237 4.6h4.501v5.021h-4.501v-5.021z"/>
          <path d="M64.531 96.507h4.964v17.531h-4.964z"/>
          <path d="M74.692 96.741v17.531h11.947v-4.654h-7.059v-12.955l-4.888.078z"/>
          <path d="M102.463 96.585v4.732h-7.99v1.707h3.413c1.785 0 5.508-.077 5.508 5.508s-2.561 5.896-7.758 5.896h-6.283v-4.267h7.214c2.172 0 2.292-.708 2.292-1.324 0-.615-1.11-.902-3.369-.902s-6.447-1.11-6.447-5.454 2.172-5.973 6.516-5.973c4.345-.001 6.904.077 6.904.077z"/>
        </g>
        <g fill="#fff">
          <path d="M30.787 91.233h41.269s-9.154-20.789-6.826-39.873c2.326-19.082 17.376-27.771 25.909-28.702 8.533-.931 13.187 4.344 13.187 4.344l1.861-2.792s-12.256-12.412-27.771-11.015c-15.514 1.395-26.219 11.635-32.89 24.046-6.671 12.412-10.55 21.101-13.188 34.132-2.637 13.033-1.551 19.86-1.551 19.86z"/>
          <path d="M22.565 70.444l8.066.62-1.396 8.068-7.602-.931.932-7.757z"/>
          <path d="M35.286 53.377l2.172-6.05-7.137-2.793-2.327 6.516 7.292 2.327z"/>
          <path d="M45.37 32.588l4.189-4.965-5.43-3.568-4.343 4.81 5.584 3.723z"/>
          <path d="M56.385 13.351l3.724 4.499 5.12-2.947-3.724-4.189-5.12 2.637z"/>
          <path d="M74.538 8.231l.93 4.499 6.361-.155-.62-4.034-6.671-.31z"/>
          <path d="M96.102 13.04l-.155 2.792 4.343 2.328.931-1.396-5.119-3.724z"/>
          <path d="M95.172 24.986v2.327l4.189.465v-1.861l-4.189-.931z"/>
          <path d="M81.829 27.002l2.017 3.724 2.948-2.327-.621-2.482-4.344 1.085z"/>
          <path d="M75.468 31.812l3.103 4.655-1.862 3.257-4.499-4.965 3.258-2.947z"/>
          <path d="M69.262 44.69l-2.017 4.033 5.275 4.5 1.241-5.121-4.499-3.412z"/>
          <path d="M67.09 58.807l-.31 5.43 6.516 2.792-.311-5.119-5.895-3.103z"/>
          <path d="M68.952 78.045l1.552 5.586 8.223.465-2.949-6.051h-6.826z"/>
        </g>
        <path stroke="#5e000e" strokeWidth="3" d="M17.444 125.054s.188-29.538.188-59.564c0-58.159-4.901-62.491 21.194-62.491h72.635v83.889c0 27.615 3.921 38.433-23.859 38.433-27.78.001-70.158-.267-70.158-.267z" fill="none"/>
      </svg>
    );
  }
}

IconRails.propTypes = {
  location: PropTypes.string
};

export default IconRails;
