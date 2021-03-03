import React, { Component } from 'react';

const TITLES = [
  'a software architect/software developer',
  'a software engineer/development lead'
];

class Title extends Component {
  state = { titleIndex: 0 };

  componentDidMount() {
    this.animateTitles();
  }

  animateTitles() {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex });
    }, 3000);
    console.log('this.titleInterval', this.titleInterval);
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
  }

  render() {
    const title = TITLES[this.state.titleIndex];

    return (
      <p>I am {title}</p>
    )
  }
}

export default Title;
