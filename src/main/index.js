import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  const url =
    "https://929fc3c6-19e6-4972-b8b5-ca9885d8b064.mock.pstmn.io/products";
  React.useEffect(function () {
    axios
      .get(url)
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <html>
        <head>
          <title>그랩마켓</title>
        </head>
        <body>
          <div id="header">
            <div id="header-area">
              <img src="images/icons/logo.png" />
            </div>
          </div>
          <div id="body">
            <div id="banner">
              <img src="images/banners/banner1.png" />
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
              {products.map(function (product, index) {
                return (
                  <div className="product-card">
                    <div>
                      <img className="product-img" src={product.imageUrl} />
                    </div>
                    <div className="product-contents">
                      <span className="product-name">{product.name}</span>
                      <span className="product-price">{product.price}원</span>
                      <div className="product-seller">
                        <img
                          className="product-avatar"
                          src="images/icons/avatar.png"
                        />
                        <span>{product.seller}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="footer"></div>
        </body>
      </html>
    </div>
  );
}

export default MainPage;
