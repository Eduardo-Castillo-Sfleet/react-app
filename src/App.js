import React from 'react';
import './App.css';
import datos from './datos.json'
import Datos from './components/Datos'
import DatoForm from './components/DatoForm'

class App extends React.Component {

  state = {
    datos: datos
  }

  render() {
    return( 
      <div>
        <DatoForm/>
        <Datos datos={this.state.datos}/>
      </div>)
  }
}


export default App;
