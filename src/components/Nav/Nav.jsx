import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const go = useNavigate();
  const logout = async () => {
    go("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white">
            Registro de actividades
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto mb-2">
            <li className="nav-item active px-lg-5">
              <Link to="/add-activity" className="nav-link text-white active">
                Registrar
              </Link>
            </li>
            <li className="nav-item active px-lg-5">
              <Link to="/search-activities" className="nav-link text-white active">
                Consultar
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto mb-2">
            <li className="nav-item px-lg-5">
              <button className="btn btn-light" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
