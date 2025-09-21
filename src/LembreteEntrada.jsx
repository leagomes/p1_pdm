import { Component } from "react";

class LembreteEntrada extends Component {
  state = {
    descricao: "",
    mensagem: "",
  };

  onTermoAlterado = (event) => {
    this.setState({ descricao: event.target.value });
  };

  onEnvio = () => {
    const { descricao } = this.state;

    if (descricao.trim() !== "") {
      this.setState({
        mensagem: "Lembrete cadastrado!",
        descricao: "",
      });

      if (this.props.onNovoLembrete) {
        this.props.onNovoLembrete(descricao.trim());
      }
    } else {
      this.setState({ mensagem: "Digite um lembrete válido." });
    }
  };

  render() {
    return (
      <div className="mt-4 text-center">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Digite seu novo lembrete"
          value={this.state.descricao}
          onChange={this.onTermoAlterado}
        />
        <button className="btn btn-primary w-100 mt-2" onClick={this.onEnvio}>
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
