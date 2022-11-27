import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import MainPage from "./main/index.js";
import ProductPage from "./product";
import UploadPage from "./upload";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const navi = useNavigate();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              navi("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/products/:id" element={<ProductPage />}></Route>
          <Route path="/upload" element={<UploadPage />}></Route>
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
