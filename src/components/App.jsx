import React, { Component } from 'react';
import {
  Header,
  Navigation,
} from './';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
