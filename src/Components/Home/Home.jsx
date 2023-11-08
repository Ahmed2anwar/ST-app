import React from "react";
import Filter from "../Filter/Filter";
import Sidebar from "../Sidebar-filter/Sidebar";
import PrroductsCards from "../ProductCard/PrroductsCards";
import ProductContainer from "../ProductContainer/ProductContainer";

export const Home = () => {
  return (
    <>
      <article>
        <Filter/>
        <div className="container">
          <div className="row ">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 mt-2 p-0">
                <Sidebar/>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7 mt-2 pe-0 ps-2">
             <ProductContainer/>
            </div> 
          </div>
        </div>
      </article>
    </>
  );
};
