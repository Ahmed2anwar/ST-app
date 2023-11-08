import React, { useState } from "react";

const ProductsCards = ({ title, priceMonth, priceYear, disc,id ,AddProduct, newProducts}) => {
  const [isAddToCartVisible, setIsAddToCartVisible] = useState(false);
  const [addOne, setAddOne] = useState(false);
  const [quantity, setQuantity] = useState(1);
  console.log(newProducts);
  function handleQuantityChange(e) {
    const value = e.target.value;

    if (value < 0) {
      setQuantity(0);
    } else {
      setQuantity(value);
    }
  }

  function handelCart() {
    if (isAddToCartVisible === false) {
      setAddOne(true);
      setIsAddToCartVisible(true);
    }
  }

  function handelRemove() {
    if (isAddToCartVisible === true) {
      setAddOne(false);
      setIsAddToCartVisible(false);
    }
  }

  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-12">
        <div className="product-card py-4 px-3">
          <div className="d-flex align-items-center">
            <label className="custom-checkbox">
              <input type="checkbox" name="compare" />
              <span className="checkmark mt-1"></span>
            </label>
            <p className="p-0 m-0 ps-2 fw-semibold">Add to compare list</p>
          </div>
          <div>
            <h5 className="my-4 fw-bold text-capitalize">{title}</h5>
            <div class="dropdown-center">
              <button
                class="btn p-0 fs-5 bg-transparent dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#a10911" }}
              >
                {priceMonth}
              </button>
              <ul class="dropdown-menu">
                <li>
                  <p class="dropdown-item">{priceYear}</p>
                </li>
              </ul>
            </div>

            <p className="py-5 text-capitalize">{disc}</p>
            <div className="carts d-flex justify-content-between align-items-center py-2">
              <div className="d-flex align-items-center">
                {addOne ? (
                  <p
                    className="m-0 "
                    style={{ cursor: "pointer" }}
                    onClick={() => handelRemove()}
                  >
                    {" "}
                    <span className="text-danger  ">X</span> Remove
                  </p>
                ) : (
                  <p
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    className="p-0 m-0 fw-semibold"
                    style={{ cursor: "pointer" }}
                    onClick={()=>AddProduct(id)}
                  >
                    <span className="fs-5">+</span> Add-ons
                  </p>
                )}
              </div>
              {isAddToCartVisible ? (
                <div className="d-flex align-items-center">
                  <h6 className="pe-2 m-0 p-0">Select Qty :</h6>
                  <input
                    type="number"
                    onChange={handleQuantityChange}
                    style={{
                      width: "60px",
                      height: "35px",
                      borderColor: "#e7eaf6",
                    }}
                    className="border-1 form-control "
                    value={quantity}
                  />
           
                </div>
              ) : (
                <button
                  className={`add-btn px-4 btn btn-danger text-uppercase fw-semibold ${
                    isAddToCartVisible ? "visible" : "hidden"
                  }`}
                  style={{ backgroundColor: "#a10911" }}
                  onClick={() => handelCart()}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
        <div>
          <div
            class="modal   modal-lg fade"
            id="staticBackdrop"
            data-bs-backdrop="dynamic"
            data-bs-keyboard="true"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog  modal-dialog-centered">
              <div class="modal-content ">
                <div class="modal-header pt-4">
                  {
                    newProducts.map((product)=>(<h1 class="modal-title fw-bold fs-4" id="staticBackdropLabel">
                   {product.title}
                  </h1>))
                  }
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="overflow-x-scroll">
                <div class="modal-body mb-4 mt-2 ">
                {
                    newProducts.map((product)=>(<p className="fw-semibold w-75">
                      {product.desp}
                    
                    </p>))
                  }
                
                  <h5 className="fw-bold my-4">Available Add-ons</h5>
                  <div class="search-container w-75 position-relative">
                    <input
                      type="text"
                      class="search-input form-control"
                      placeholder="Search for products"
                    />
                    <button
                      type="submit"
                      class="position-absolute end-0 bg-transparent search-button"
                      style={{ top: "2px" }}
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                  <div className="border-bottom mt-3 pe-4 py-3 d-flex align-items-center">
                    <label className="custom-checkbox">
                      <input type="checkbox" name="compare" />
                      <span className="checkmark mt-1"></span>
                    </label>
                    <p className="p-0 m-0 ps-2">Advanced Communications</p>
                    <div className="px-4 d-flex align-items-center">
                      <p className="pe-2 m-0 p-0 fw-normal">Select Qty :</p>
                      <input
                        type="number"
                        onChange={handleQuantityChange}
                        style={{
                          width: "65px",
                          height: "32px",
                          borderColor: "#e7eaf6",
                        }}
                        className="border-1 form-control "
                        value={quantity}
                      />
                    </div>
                    <div class="dropdown-center">
                      <button
                        class="btn p-0 border px-3 py-1 bg-transparent dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#a10911" }}
                      >
                        {priceMonth}
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <p class="dropdown-item">{priceYear}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className=" border-bottom pe-4 py-3 d-flex align-items-center">
                    <label className="custom-checkbox">
                      <input type="checkbox" name="compare" />
                      <span className="checkmark mt-1"></span>
                    </label>
                    <p className="p-0 m-0 ps-2">Advanced Communications</p>
                    <div className="px-4 d-flex align-items-center">
                      <p className="pe-2 m-0 p-0 fw-normal">Select Qty :</p>
                      <input
                        type="number"
                        onChange={handleQuantityChange}
                        style={{
                          width: "65px",
                          height: "32px",
                          borderColor: "#e7eaf6",
                        }}
                        className="border-1 form-control "
                        value={quantity}
                      />
                    </div>
                    <div class="dropdown-center">
                      <button
                        class="btn p-0 border px-3 py-1 bg-transparent dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#a10911" }}
                      >
                        {priceMonth}
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <p class="dropdown-item">{priceYear}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-bottom pe-4 py-3 d-flex align-items-center">
                    <label className="custom-checkbox">
                      <input type="checkbox" name="compare" />
                      <span className="checkmark mt-1"></span>
                    </label>
                    <p className="p-0 m-0 ps-2">Advanced Communications</p>
                    <div className="px-4 d-flex align-items-center">
                      <p className="pe-2 m-0 p-0 fw-normal">Select Qty :</p>
                      <input
                        type="number"
                        onChange={handleQuantityChange}
                        style={{
                          width: "65px",
                          height: "32px",
                          borderColor: "#e7eaf6",
                        }}
                        className="border-1 form-control "
                        value={quantity}
                      />
                    </div>
                    <div class="dropdown-center">
                      <button
                        class="btn p-0 border px-3 py-1 bg-transparent dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#a10911" }}
                      >
                        {priceMonth}
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <p class="dropdown-item">{priceYear}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className=" border-bottom pe-4 py-3 d-flex align-items-center">
                    <label className="custom-checkbox">
                      <input type="checkbox" name="compare" />
                      <span className="checkmark mt-1"></span>
                    </label>
                    <p className="p-0 m-0 ps-2">Advanced Communications</p>
                    <div className="px-4 d-flex align-items-center">
                      <p className="pe-2 m-0 p-0 fw-normal">Select Qty :</p>
                      <input
                        type="number"
                        onChange={handleQuantityChange}
                        style={{
                          width: "65px",
                          height: "32px",
                          borderColor: "#e7eaf6",
                        }}
                        className="border-1 form-control "
                        value={quantity}
                      />
                    </div>
                    <div class="dropdown-center">
                      <button
                        class="btn p-0 border px-3 py-1 bg-transparent dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#a10911" }}
                      >
                        {priceMonth}
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <p class="dropdown-item">{priceYear}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex mt-3 align-items-center">
                  <button
                    className="btn  px-4 me-2  py-2 text-white  "
                    style={{ backgroundColor: "#a10911" }}
                  >
                     <i class="fa-solid fa-plus"></i> Add
                  </button>
                  {
                    newProducts.map((product)=>(
                      <div class="dropdown-center">
                      <button
                        class="btn p-0 fs-4 fw-semibold px-3 py-1 bg-transparent dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#a10911" }}
                      >
                        {product.monthPrice}
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <p class="dropdown-item">{product.yearPrice}</p>
                        </li>
                      </ul>
                    </div>
                    ))
                  }
                 
                  
                </div>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCards;
