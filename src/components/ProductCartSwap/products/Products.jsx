import React, { useEffect, useState } from 'react';
import './products.css';

const Products = ({ data, setProducts }) => {
  const handleChecked = (idx) => {
    console.log(idx);
    const tempData = [...data];
    tempData[idx].check = !tempData[idx].check;
    setProducts(tempData);
  }
  return (
    <>
      <div> All Products</div>
      <ul>
        {data.map((product, idx) => {
          return (
            <li className="liCenter" key={idx}>
              <input type="checkbox" checked={product.check} onChange={() => handleChecked(idx)}/>
              {product.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
