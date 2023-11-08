import React from "react";

const Filter = () => {
  return (
    <>
      <section className="mt-3 mb-2">
        <div className="container">
          <div className="row ">
            <div className="filterion-content  py-2 bg-white ">
              <div className="d-flex my-2 flex-wrap ">
                <div className="filter-info d-flex mt-1 align-items-center">
                  <h6 className="pe-4 pt-2 pb-1 ">Sort </h6>
                  <i class="fa-solid fa-angle-down "></i>
                </div>
                <div className="filter-info d-flex mt-1 align-items-center">
                  <h6 className="pe-4 pt-2 pb-1 ">Category </h6>
                  <i class="fa-solid fa-angle-down "></i>
                </div>
                <div className="filter-info d-flex mt-1 align-items-center">
                  <h6 className="pe-4 pt-2 pb-1  ">Products </h6>
                  <i class="fa-solid fa-angle-down "></i>
                </div>
              </div>
              <div className="d-flex my-2 ">
                <div className="prev  mt-1">
                  <h6 className="">Prev </h6>
                </div>
                <div className="paginate mt-1"style={{backgroundColor:'#a10911', color:"white"}}>
                  <h6 className="">1 </h6>
                </div>
                <div className="paginate mt-1" >
                  <h6 className="">2 </h6>
                </div>
                <div className="paginate mt-1">
                  <h6 className="">3 </h6>
                </div>
                <div className="paginate mt-1">
                  <h6 className="">4 </h6>
                </div>
                <div className="prev mt-1">
                  <h6 className="">Next </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
