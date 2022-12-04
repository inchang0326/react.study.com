import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./index.css";
import { API_URL } from "../config/constant.js";
import dayjs from "dayjs";

console.log(dayjs().format("YYYYMMDD"));

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const url = `${API_URL}/products/${id}`;
  React.useEffect(function () {
    axios
      .get(url)
      .then(function (result) {
        const product = result.data;
        console.log(product);
        setProduct(product);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
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
        <pre id="description">{product.img_info} </pre>
      </div>
    </div>
  );
}

export default ProductPage;
