import React from 'react';
import './App.css';

const HelloWorld = () => {
  return(
    <div>
      Hello World!
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

export default App;
