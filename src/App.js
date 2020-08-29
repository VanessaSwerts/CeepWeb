import React, { Component } from 'react'
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import './assets/App.css'
import './assets/index.css'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoestado = {
      notas: novoArrayNotas
    }
    this.setState(novoestado)
  }

  render() {
    return (
      <section className="conteudo" >
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    )
  }
}


