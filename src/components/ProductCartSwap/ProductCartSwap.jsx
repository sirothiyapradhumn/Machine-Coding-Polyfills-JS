import React, { useCallback, useEffect, useState } from 'react';
import './productCartSwap.css';
import Products from './products/Products';
import Cart from './cart/Cart';

function ProductCartSwap() {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch('https://dummyjson.com/products');
      const res = await data.json();
      // console.log(res);
      const productsChecked = res.products.map((product) => ({
        ...product,
        check: false,
      }));
      console.log(productsChecked);
      setProducts(productsChecked);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCart = useCallback(() => {
    setCartData((prev) => {
      const exisitingID = new Set(prev.map((ele) => ele.id));
      const filterCheckProduct = products.filter((product) => product.check && !exisitingID.has(product.id));
      return [...prev, ...filterCheckProduct];
    })
    const resetData = products.map((item) => {
      if (item.check) {
        return { ...item, check: false };
      }
      return { ...item };
    });
    setProducts(resetData);
  }, [setCartData, products]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mainContainer">
      <div className="btnContianr">
        <Products data={products} setProducts={setProducts} />
        <button type="button" onClick={handleCart}>
          Add to Cart
        </button>
      </div>
      <div>
        <Cart data={cartData} />
        <button onClick={() => setCartData([])}>clear</button>
      </div>
    </div>
  );
}

export default ProductCartSwap;
