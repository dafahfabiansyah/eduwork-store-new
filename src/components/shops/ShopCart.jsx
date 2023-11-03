import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ShopCart = ({ addToCart }) => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3300/api/products')
      .then((response) => {
        setProducts(response.data);
        setSkeleton(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (skeleton) {
    return <Skeleton />;
  }
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {products?.map((product) => {
        return (
          <div className="box">
            <div className="product mtop">
              <div className="img">
                {/* <span className="discount">{product.price}% Off</span> */}
                <img src={`http://localhost:3300/image/${product.image}`} alt={product.name} />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <h5>{product.description}</h5>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>{product.price}</h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(product)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
