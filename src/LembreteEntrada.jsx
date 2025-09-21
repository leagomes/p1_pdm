import { Component } from "react";

class LembreteEntrada extends Component {
  state = { mensagem: "" };

  mostrarMensagem = () => {
    this.setState({ mensagem: "Lembrete cadastrado!" });
  };

  render() {
    return (
      <div className="container mt-4 text-center col-3">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Digite seu novo lembrete"
          value={this.state.descricao}
        />
        <button
          className="btn btn-primary w-100 mt-2"
          onClick={this.mostrarMensagem}
        >
          OK
        </button>
        {this.state.mensagem && (
          <p className="mt-3 text-success">{this.state.mensagem}</p>
        )}
      </div>
    );
  }
}

export default LembreteEntrada;
