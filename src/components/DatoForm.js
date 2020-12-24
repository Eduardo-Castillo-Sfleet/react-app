import React from 'react';

class DatoForm extends React.Component{

    state = {
        titulo: '',
        descripcion: ''
    }

    formEnviado = (e) => {
        this.props.addDato(this.state.titulo, this.state.descripcion)
        e.preventDefault()
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.formEnviado}>
                <input type="text" placeholder="Escribe el dato" name="titulo" onChange={this.onChange} value={this.state.titulo}/>
                <br/>
                <br/>
                <textarea placeholder="Descripcion" name="descripcion" onChange={this.onChange}></textarea>
                <br/>
                <br/>
                <input type="submit" value="Guardar"/>
            </form>
        )
    }

}

export default DatoForm;