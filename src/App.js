import React, { Component } from 'react';
import SampleComponent from './components/sample-component';
import SampleComponent1 from './components/sample-component1';
import SampleComponent2 from './components/sample-component2';
import SampleComponent3 from './components/sample-component3';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <SampleComponent1 />
        <SampleComponent2 />
        <SampleComponent3 />

        <SampleComponent
          title="Sample Component 4"
          content="Props를 활용한 샘플 컴포넌트입니다."
        />
      </div>
    );
  }
}

export default App;
