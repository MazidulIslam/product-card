import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => {
        // debugger;
        console.log(json.splice(0, 8));
        setProducts(json.splice(0, 8));
      });
  }, []);
  return (
    <div class="container mx-auto px-20 bg-white">
      <div class="grid grid-cols-4 gap-2">
        {products?.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default Products;
