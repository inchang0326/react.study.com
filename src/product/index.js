import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  console.log(product);

  const url = `https://929fc3c6-19e6-4972-b8b5-ca9885d8b064.mock.pstmn.io/products/${id}`;
  React.useEffect(function () {
    axios
      .get(url)
      .then(function (result) {
        const product = result.data;
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
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2020년 12월 8일</div>
        <div id="description">{product.desc} </div>
      </div>
    </div>
  );
}

export default ProductPage;
