import React, { Component } from 'react';
import GoogleMap from './components/GoogleMaps'

class App extends Component {
  render() {
    return (
      <div className="App">
          <GoogleMap />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
