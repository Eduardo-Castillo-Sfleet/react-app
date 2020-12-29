import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import datos from './datos.json'
import Datos from './components/Datos'
import DatoForm from './components/DatoForm'
import Posts from './components/Posts'
import Ant from './components/Ant'


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
      <Router>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/ant">Ant</Link>
        <Route exact path="/" render={() => {
          return <div>
            <DatoForm addDato={this.addDato}/>
            <Datos datos={this.state.datos} deleteDato={this.deleteDato} updateDato={this.updateDato}/>
          </div>
        }}>
        </Route>
        <Route exact path="/posts" component={Posts}></Route>
        <Route exact path="/ant" component={Ant}></Route>
      </Router>
      )
  }
}


export default App;
