const LembreteLista = () => {
  return (
    <div className="container border border-warning p-3 rounded mt-5 col-3">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Preparar aula de programação</span>
          <span>
            <i
              className="fa-solid fa-star me-3"
              style={{ color: "#FFD43B" }}
            ></i>
            <i className="fa-solid fa-trash" style={{ color: "#0475d0" }}></i>
          </span>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Fazer feira</span>
          <span>
            <i
              className="fa-regular fa-star me-3"
              style={{ color: "#FFD43B" }}
            ></i>
            <i className="fa-solid fa-trash" style={{ color: "#0475d0" }}></i>
          </span>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Preparar marmitas</span>
          <span>
            <i
              className="fa-regular fa-star me-3"
              style={{ color: "#FFD43B" }}
            ></i>
            <i className="fa-solid fa-trash" style={{ color: "#0475d0" }}></i>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LembreteLista;
