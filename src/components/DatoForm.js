import React from 'react';

class DatoForm extends React.Component{

    state = {
        title: '',
        descripcion: ''
    }

    formEnviado = (e) => {
        e.preventDefault()
    }

    onChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.title)
    }

    render() {
        return (
            <form onSubmit={this.formEnviado}>
                <input type="text" placeholder="Escribe el dato" name="title" onChange={this.onChange} value={this.state.title}/>
                <br/>
                <br/>
                <textarea placeholder="Descripcion"></textarea>
                <br/>
                <br/>
                <input type="submit" value="Guardar"/>
            </form>
        )
    }

}

export default DatoForm;