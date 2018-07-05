import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// "devDependencies": {
//   "eslint": "^4.19.1",
//   "eslint-config-yoctol": "^0.17.1",
//   "eslint-plugin-import": "^2.13.0",
//   "eslint-plugin-jsx-a11y": "^6.0.3",
//   "eslint-plugin-prettier": "^2.6.1",
//   "eslint-plugin-react": "^7.9.1"
// }

export default App;
