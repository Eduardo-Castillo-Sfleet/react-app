import React from 'react';
import Dato from './Dato';

import PropTypes from 'prop-types';

class Datos extends React.Component{
    render() {
        return this.props.datos.map(dato => <Dato dato={dato} key={dato.id}/>)
    }
}

Datos.propTypes = {
    datos: PropTypes.array.isRequired
}

export default Datos;