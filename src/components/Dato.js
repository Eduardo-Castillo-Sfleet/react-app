import React from 'react';

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

export default Dato;