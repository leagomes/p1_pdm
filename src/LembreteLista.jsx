import { Component } from "react";
import LembreteEntrada from "./LembreteEntrada";

class LembreteLista extends Component {
  state = {
    lembretes: [],
  };

  adicionarLembrete = (descricao) => {
    this.setState((estadoAnterior) => {
      const novaLista = estadoAnterior.lembretes.concat({
        descricao: descricao,
        favorito: false,
      });

      return { lembretes: novaLista };
    });
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

  favoritar = (indice) => {
    this.setState((estadoAnterior) => {
      const novaLista = estadoAnterior.lembretes.map((item, i) => {
        if (i === indice && item !== null) {
          return {
            descricao: item.descricao,
            favorito: !item.favorito,
          };
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
          {this.state.lembretes.map((item, i) => {
            if (item === null) return null;

            return (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{item.descricao}</span>
                <span>
                  <i
                    className={`me-3 ${
                      item.favorito ? "fa-solid" : "fa-regular"
                    } fa-star`}
                    style={{ color: "#FFD43B", cursor: "pointer" }}
                    onClick={() => this.favoritar(i)}
                  ></i>
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#0475d0", cursor: "pointer" }}
                    onClick={() => this.removerLembrete(i)}
                  ></i>
                </span>
              </li>
            );
          })}
        </ul>
        <LembreteEntrada onNovoLembrete={this.adicionarLembrete} />
      </div>
    );
  }
}

export default LembreteLista;
