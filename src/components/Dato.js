import React from 'react';

import PropTypes from 'prop-types';


class Dato extends React.Component {
    render(){

        const {id, titulo, descripcion, done} = this.props.dato;

        return <div>
            {id} - 
            {titulo} -
            {descripcion} -
            <input type="checkbox" defaultChecked={done === true} onChange={this.props.updateDato.bind(this, id)}/>
            <button onClick={this.props.deleteDato.bind(this, id)}>X</button>
        </div>
    }

}

Dato.propTypes = {
    dato: PropTypes.object
}

export default Dato;