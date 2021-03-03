import React, { Component } from 'react';
import Projects from './Projects';
import Title from "./Title";
import profilePic from '../assets/profile.png';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <img src={profilePic} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Dinu</p>
        <Title />
        <p>I'm enjoy software development, and building enterprise applications.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Toronto and split my time between architecture and coding</p>
              <p>My favorite programming languages are Java, and JavaScript</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr />
        <Projects />
        <hr />
      </div>
    )
  }
}

export default App;
