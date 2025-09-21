import { Component } from "react";
import LembreteEntrada from "./LembreteEntrada";

class LembreteLista extends Component {
  state = {
    lembretes: [],
  };

  adicionarLembrete = (descricao) => {
    this.setState((estadoAnterior) => ({
      lembretes: [...estadoAnterior.lembretes, descricao],
    }));
  };

  removerLembrete = (indice) => {
    this.setState((estadoAnterior) => {
      const novaLista = estadoAnterior.lembretes.map((item, i) => {
        if (i === indice) {
          return null;
        } else {
          return item;
        }
      });

      return { lembretes: novaLista };
    });
  };

  render() {
    return (
      <div className="container mt-5 col-3">
        <ul className="list-group mt-4">
          {this.state.lembretes.map((lembrete, index) => {
            if (lembrete !== null) {
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{lembrete}</span>
                  <span>
                    <i
                      className="fa-regular fa-star me-3"
                      style={{ color: "#FFD43B", cursor: "pointer" }}
                    ></i>
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "#0475d0", cursor: "pointer" }}
                      onClick={() => this.removerLembrete(index)}
                    ></i>
                  </span>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <LembreteEntrada onNovoLembrete={this.adicionarLembrete} />
      </div>
    );
  }
}

export default LembreteLista;
