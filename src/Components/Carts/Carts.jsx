import React, { useState } from "react";

const Carts = () => {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(e) {
    const value = e.target.value;

    if (value < 0) {
      setQuantity(0);
    } else {
      setQuantity(value);
    }
  }

  return (
    <>
      <article className="carts mt-5 pt-5" style={{ minHeight: "500px" }}>
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="shopping-carts">
                <h2 className="text-center fs-1">Shopping Carts</h2>
                <div className=" mt-5">
                  <table className="table table-striped table-bordered ">
                    <thead>
                      <tr className="table-dark">
                        <th scope="col" className="col-1">Id</th>
                        <th scope="col" className="col-2">Title</th>
                        <th scope="col" className="col-2">Price</th>
                        <th scope="col" className="col-2">Quntaity</th>
                        <th scope="col" className="col-1">Total</th>
                        <th scope="col" className="col-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Microsoft</td>
                        
                        <td className="text-danger">
                            US$20.99/month
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <h6 className="pe-2 m-0 p-0">Select Qty :</h6>
                            <input
                              type="number"
                              onChange={handleQuantityChange}
                              style={{
                                width: "70px",
                                height: "35px",
                                borderColor: "#e7eaf6",
                              }}
                              className="border-1 form-control "
                              value={quantity}
                            />
                          </div>
                        </td>
                        <td>50$</td>
                        <td className="te"><button className="btn btn-danger px-4">Delete</button></td>
                      </tr>
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Carts;
