import React from 'react';
import './App.css';
import datos from './datos.json'
import Datos from './components/Datos'

class App extends React.Component {

  state = {
    datos: datos
  }

  render() {
    return( 
      <div>
        <Datos datos={this.state.datos}/>
      </div>)
  }
}


export default App;
