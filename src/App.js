import React from 'react';
import './App.css';
import datos from './datos.json'
import Datos from './components/Datos'
import DatoForm from './components/DatoForm'

class App extends React.Component {

  state = {
    datos: datos
  }

  addDato = (title, description) => {
    const nuevoDato = {
      title: title,
      description: description
    }
    this.setState({
      datos: [...this.state.datos, nuevoDato]
    })
  }

  render() {
    return( 
      <div>
        <DatoForm addDato={this.addDato}/>
        <Datos datos={this.state.datos}/>
      </div>)
  }
}


export default App;
