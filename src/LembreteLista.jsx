import { Component } from "react";
import LembreteEntrada from "./LembreteEntrada";

class LembreteLista extends Component {
  state = {
    lembretes: [],
    exibirFavoritos: false,
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

  alternarFiltro = () => {
    this.setState((estadoAnterior) => ({
      exibirFavoritos: !estadoAnterior.exibirFavoritos,
    }));
  };

  render() {
    const lembretesFiltrados = this.state.lembretes.map((item, i) => {
      if (item === null) return null;

      if (this.state.exibirFavoritos && item.favorito !== true) {
        return null;
      }

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
    });

    return (
      <div className="container mt-5 col-4">
        <div className="d-flex justify-content-between mb-3">
          <button
            className={`btn ${
              this.state.exibirFavoritos ? "btn-outline-primary" : "btn-primary"
            } w-15 me-2`}
            onClick={this.alternarFiltro}
          >
            {this.state.exibirFavoritos ? "Mostrar todos" : "Mostrar favoritos"}
          </button>
        </div>

        <ul className="list-group">{lembretesFiltrados}</ul>

        <LembreteEntrada onNovoLembrete={this.adicionarLembrete} />
      </div>
    );
  }
}

export default LembreteLista;
