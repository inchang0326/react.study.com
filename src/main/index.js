import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config/constant.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Carousel } from "antd";
import ErrorBanner from "../components/ErrorBanner";

dayjs.extend(relativeTime);

function MainPage() {
  const [products, setProducts] = React.useState([]);
  const [banners, setBanners] = React.useState([]);
  const [error, SetError] = React.useState(false);

  React.useEffect(function () {
    axios
      .get(`${API_URL}/products`)
      .then(function (result) {
        const products = result.data.products;
        console.log(products);
        setProducts(products);
      })
      .catch(function (error) {
        SetError(true);
      });

    axios
      .get(`${API_URL}/banners`)
      .then(function (result) {
        const banners = result.data.banners;
        console.log(banners);
        setBanners(banners);
      })
      .catch(function (error) {
        SetError(true);
      });
  }, []);

  if (error) {
    return <ErrorBanner message={`Main Page API Fetch Error!`} />;
  }

  return (
    <div>
      <html>
        <head>
          <title>그랩마켓</title>
        </head>
        <body>
          <div id="body">
            <Carousel autoplay autoplaySpeed={3000}>
              {banners.map((banner, index) => {
                return (
                  <Link to="/events">
                    <div id="banner">
                      <img alt="banner" src={banner.img_url} />
                    </div>
                  </Link>
                );
              })}
            </Carousel>
            <h1 id="product-headline">판매되는 상품들</h1>
            <div id="product-list">
              {products.map(function (product, index) {
                return (
                  <div className="product-card">
                    {product.status === "02" && (
                      <div className="product-blur">Sold Out</div>
                    )}
                    <Link
                      className="product-link"
                      to={`/products/${product.id}`}
                    >
                      <div>
                        <img
                          alt="product"
                          className="product-img"
                          src={product.img_url}
                        />
                      </div>
                      <div className="product-contents">
                        <span className="product-name">{product.name}</span>
                        <span className="product-price">{product.price}원</span>
                        <div className="product-footer">
                          <div className="product-seller">
                            <img
                              alt="avatar"
                              className="product-avatar"
                              src="images/icons/avatar.png"
                            />
                            <span>{product.seller}</span>
                          </div>
                          <span className="product-upload-time">
                            {dayjs(product.created_at).fromNow()}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}

export default MainPage;
