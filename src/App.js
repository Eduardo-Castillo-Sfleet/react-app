import React from 'react';
import './App.css';
import datos from './datos.json'
import Datos from './components/Datos'
import DatoForm from './components/DatoForm'
import Posts from './components/Posts'

class App extends React.Component {

  state = {
    datos: datos
  }

  addDato = (titulo, descripcion) => {
    const nuevoDato = {
      id: this.state.datos.length,
      titulo: titulo,
      descripcion: descripcion,
      done: true
    }
    this.setState({
      datos: [...this.state.datos, nuevoDato]
    })
  }

  deleteDato = (id) => {
    const newListDatos = this.state.datos.filter(task => task.id !== id)
    this.setState({datos: newListDatos})
  }

  updateDato = id => {
    this.state.datos.map(dato => {
      if(dato.id === id)
        dato.done = !dato.done
      return dato
    })
    console.log(this.state.datos)
  }

  render() {
    return( 
      <div>
        <DatoForm addDato={this.addDato}/>
        <Datos datos={this.state.datos} deleteDato={this.deleteDato} updateDato={this.updateDato}/>
        <Posts />
      </div>)
  }
}


export default App;
