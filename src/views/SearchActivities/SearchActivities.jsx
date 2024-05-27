import React from "react";
import "./SearchActivities.css"

const SearchActivities = () => {
  return (
    <div className="container mt-5">
      <div class="row">
        <div class="col">
          <label for="searchType" class="form-label">
            Tipo de consulta
          </label>
          <select id="inputState" class="form-select">
            <option selected>PROYECTO</option>
            <option>HORAS</option>
            <option>USUARIO</option>
          </select>
        </div>
        <div class="col">
          <label for="searchValue" class="form-label">
            Valor
          </label>
          <input type="text" class="form-control" id="searchValue" />
        </div>
        <div class="col">
          <button type="submit" className="btn btn-primary searchButton">
            Buscar
          </button>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>PROYECTO</th>
                <th>DESCRIPCIÓN</th>
                <th>HORAS</th>
                <th>USUARIO</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <td>1</td>
                <td>Tracker</td>
                <td>Front del login</td>
                <td>4</td>
                <td>jose</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Tracker</td>
                <td>Formulario de registros</td>
                <td>8</td>
                <td>jose</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchActivities;
