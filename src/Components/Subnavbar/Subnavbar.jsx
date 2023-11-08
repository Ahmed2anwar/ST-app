import React from "react";
import { Link } from "react-router-dom";

const Subnavbar = () => {
  return (
    <>
      <article >
        <section>
          <div className="sub-navbar">
            <div className="container">
              <div className="row py-2   align-items-center justify-content-between">
                <div className="col-lg-3 col-md-4 col-sm-4 my-2 categories">
                  <div className="d-flex  align-items-center">
                    <i class="fa-solid fa-table-cells-large fs-2"></i>
                    <p className="p-0 ps-2 m-0">All Categories</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-8 my-2 services">
                  <div className="d-flex justify-content-center  ">
                    <p className="mx-4 m-0 p-0">Cloud Services</p>
                    <p className="mx-4 m-0 p-0">Security</p>
                    <p className="mx-4 m-0 p-0">Infrastrutre</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 my-2  m-auto">
                  <div class="search-container">
                    <input
                      type="text"
                      class="search-input form-control"
                      placeholder="Search for products"
                    />
                    <button type="submit" class="search-button">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 bg-white">
          <div className="container">
            <div className="row">
              <p className="fs-6" style={{ fontWeight: "500", color: "gray" }}>
                Home  <i class="fa-solid fa-angle-left "></i>{" "}
                <span
                  className="main-color"
                  style={{ cursor: "pointer ", fontWeight: "500" }}
                >
                  Business Application
                </span>{" "}
              </p>
              <h4 className="fw-bold">Business Application</h4>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Subnavbar;
