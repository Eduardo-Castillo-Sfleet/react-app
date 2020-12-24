import React from 'react';

import PropTypes from 'prop-types';


class Dato extends React.Component {
    render(){

        const {id, titulo, descripcion, done} = this.props.dato;

        return <div>
            {id} - 
            {titulo} -
            {descripcion} -
            {done} -
            <input type="checkbox" />
            <button>X</button>
        </div>
    }

}

Dato.propTypes = {
    dato: PropTypes.object
}

export default Dato;