import React from "react";

const AddActivity = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-4">
                <label htmlFor="projectId" className="form-label">
                  Proyecto
                </label>
                <select id="projectId" class="form-select">
                  <option selected>TRACKER</option>
                  <option>SISTEMA DE VENTAS</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <input
                  type="text"
                  required="required"
                  className="form-control"
                  name="description"
                  id="description"
                ></input>
              </div>
              <div className="mb-4">
                <label htmlFor="hours" className="form-label">
                  Horas
                </label>
                <input
                  type="text"
                  required="required"
                  className="form-control"
                  name="hours"
                  id="hours"
                ></input>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddActivity;
