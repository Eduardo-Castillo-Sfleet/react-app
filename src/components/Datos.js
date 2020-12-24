import React from 'react';
import Dato from './Dato'

class Datos extends React.Component{
    render() {
        return this.props.datos.map(dato => <Dato dato={dato} key={dato.id}/>)
    }
}

export default Datos;