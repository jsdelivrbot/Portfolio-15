import React, { Component } from 'react';

const COLORS = [
  '#ef9a9a', '#f48fb1', '#ce93d8', '#b39ddb', '#9fa8da', '#90caf9', '#81d4fa', '#80deea', '#80cbc4',
  '#a5d6a7', '#c5e1a5', '#e6ee9c', '#fff59d', '#ffe082', '#ffcc80', '#ffab91', '#bcaaa4', '#b0bec5',
  '#e57373', '#f06292', '#ba68c8', '#9575cd', '#7986cb', '#64b5f6', '#4fc3f7', '#4dd0e1', '#4db6ac',
  '#81c784', '#aed581', '#dce775', '#fff176', '#ffd54f', '#ffb74d', '#ff8a65', '#a1887f', '#90a4ae'
];

class Background extends Component {
  componentDidMount() {
    this.setBottomColor();
  }

  setBottomColor() {
    const colors = this.getRandomColors();

    document.getElementsByClassName('bottom-half')[0].style.background = `linear-gradient(to left, ${colors.join(',')}`;
  }

  getRandomColors() {
    return [COLORS[Math.floor(Math.random() * COLORS.length)], COLORS[Math.floor(Math.random() * COLORS.length)]];
  }

  render() {
    return (
      <div>
        <div className="top-half" />
        <div className="bottom-half" />
      </div>
    );
  }
}

export default Background;
