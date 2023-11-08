import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../../Assets/SoftTrendLogo.png";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white ">
        <div className="container">
          <Link className="navbar-brand">
            <img src={img} style={{ width: "150px" }} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={'/carts'}>
                  <i class="fa-solid fa-cart-shopping"></i>Carts
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <i class="fa-solid fa-circle-question"></i>Help
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <i class="fa-regular fa-user"></i>Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link">
                  <i class="fa-solid fa-globe"></i>Engilsh
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link pe-2">
                  <i class="fa-solid fa-globe"></i>SAR
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
