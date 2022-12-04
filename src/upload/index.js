import { Form, Divider, Input, Button, Upload, message } from "antd";
import axios from "axios";
import "./index.css";
import React from "react";
import { API_URL } from "../config/constant.js";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navi = useNavigate();
  const onSubmit = (values) => {
    values.img_url = values.img_url.file.response.img_url;
    const url = `${API_URL}/product`;
    axios
      .post(url, values)
      .then(function (result) {
        console.log(result.data);
        message.info("상품 업로드를 완료했습니다.");
        navi("/");
      })
      .catch(function (error) {
        console.log(error.stack);
        message.error("상품 업로드에 실패했습니다.");
      });
  };

  const [imageUrl, setImageUrl] = React.useState(null);
  const onChangeImage = (info) => {
    if (info.file.status == "uploading") {
      return;
    }
    if (info.file.status == "done") {
      const response = info.file.response;
      const imageUrl = response.img_url;
      console.log(imageUrl);
      setImageUrl(imageUrl);
    }
  };
  return (
    <div id="upload-container">
      <br></br>
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="img_url"
          label={<div className="upload-label">상품 사진</div>}
          rules={[{ required: true, message: "상품 사진을 업로드 해주세요" }]}
        >
          <Upload
            name="image"
            action={`${API_URL}/image`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <img id="upload-image" src={`${API_URL}/${imageUrl}`} />
            ) : (
              <div id="upload-img-placeholder">
                <img src="/images/icons/camera.png" />
                <span>이미지를 업로드해주세요.</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">판매자 명</div>}
          name="seller"
          rules={[{ required: true, message: "판매자 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-category"
            size="large"
            placeholder="이름을 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "상품 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-category"
            size="large"
            placeholder="상품 이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: "상품 가격을 입력해주세요" }]}
        >
          <Input
            className="upload-category"
            size="large"
            placeholder="상품 가격을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="img_info"
          label={<div className="upload-label">상품 소개</div>}
          rules={[{ required: true, message: "상품 정보를 입력해주세요." }]}
        >
          <Input.TextArea
            size="large"
            id="product-info"
            showCount
            maxLength={300}
            placeholder="상품 정보를 적어주세요."
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            업로드
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
