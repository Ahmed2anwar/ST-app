import React, { useState } from "react";
import ProductsCards from "../ProductCard/PrroductsCards";
import { products } from "../Data";
import Carts from "../Carts/Carts";
const ProductContainer = () => {
  const [newProducts, setNewProducts] = useState([]);

  function AddProduct(productId) {
    let selectedProduct = [...products];
    let filterProduct = selectedProduct.filter(
      (product) => product.id === productId
    );
    setNewProducts(filterProduct)
  }
  return (
    <>
      <div className="row g-2">
        {products.map((product) => (
          <ProductsCards
            id={product.id}
            key={product.id}
            title={product.title}
            priceMonth={product.monthPrice}
            priceYear={product.yearPrice}
            disc={product.desp}
            AddProduct={AddProduct}
            newProducts={newProducts}
          />
        ))}
      </div>
    </>
  );
};

export default ProductContainer;
