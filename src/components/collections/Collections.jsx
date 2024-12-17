import React, { useEffect, useState } from 'react';
import './style.css'
const Collections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from API
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products)) // Assuming products is the key holding the product array
      .catch(error => console.error('Error fetching products:', error));
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <section className="first-sec-main p-3">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col-sm-12">
              <h1>Collections</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <span>
                <a href="..." className="home-text text-decoration-none"> Home </a> /
              </span>
            </div>
            <div className="col-auto m-0 p-0">
              <p className="about-us-text">Collections</p>
            </div>
          </div>
        </div>
      </section>

      <section className="m-5">
        <div className="container-sm">
          <div className="row">
            {products.length === 0 ? (
              <p>Loading products...</p>
            ) : (
              products.map((product, index) => (
                <div className="col-lg-3 col-md-4 col-6 p-3" key={index}>
                  <div className="image-container">
                    <img src={product.thumbnail} alt={product.name} />
                    <div className="text-align-center justify-content-center align-items-center d-flex flex-column p-3 lh-lg">
                      <a href={`Product-Page.html?id=${product.id}`}>{product.title}</a>
                      <p>({product.stock} items)</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
