/** @format */

import React, { useEffect, useState } from "react";
import Loading from "../Loading.js";
import ProductCard from "../Product/ProductCard.js";
const Product = () => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        setLoading(false);
      });
  }, [products]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" mb-36 mt-12">
      <h1 className="lg:text-4xl text-2xl  text-center py-12 font-bold">
        Our Product
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-10/12 mx-auto">
        {products.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Product;
