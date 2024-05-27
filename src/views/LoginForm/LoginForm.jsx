import React from "react";
import "./LoginForm.css";


const LoginForm = () => {
  return (
    <div>
        <h2 className="fw-bold text-center py-5">Bienvenido al sistema de registro de actividades</h2>
        <div className="container mt-5 container-login">
            <div className="row">
              <div className="col">
                <form>
                  <div className="mb-4">
                    <label htmlFor="user" className="form-label">Usuario</label>
                    <input type="text" required='required' className="form-control" name="user"></input>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password" ></input>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </div>
  );
};

export default LoginForm;
