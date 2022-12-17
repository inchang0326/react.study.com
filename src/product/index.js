import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./index.css";
import { API_URL } from "../config/constant.js";
import dayjs from "dayjs";
import { Button, message } from "antd";
import ErrorBanner from "../components/ErrorBanner";

console.log(dayjs().format("YYYYMMDD"));

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [error, SetError] = React.useState(false);

  const getProduct = () => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then(function (result) {
        const product = result.data;
        console.log(product);
        setProduct(product);
      })
      .catch(function (error) {
        SetError(true);
      });
  };

  React.useEffect(function () {
    getProduct();
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  const onClickOrder = (order) => {
    axios
      .post(`${API_URL}/products/${id}/order`)
      .then(function (result) {
        const product = result.data;
        console.log(product);
        message.info("주문을 완료했습니다.");
        getProduct();
      })
      .catch(function (error) {
        SetError(true);
      });
  };

  if (error) {
    return <ErrorBanner message="Proudct Page Ordering Failed!" />;
  }

  return (
    <div>
      <div id="image-box">
        <img src={product.img_url} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">
          {dayjs(product.created_at).format("YYYY-MM-DD HH시 mm분")}
        </div>
        <Button
          id="order-btn"
          size="large"
          type="primary"
          danger
          onClick={onClickOrder}
          disabled={product.status === "02"}
        >
          주문하기
        </Button>
        <pre id="description">{product.img_info} </pre>
      </div>
    </div>
  );
}

export default ProductPage;
