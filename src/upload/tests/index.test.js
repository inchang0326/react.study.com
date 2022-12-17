import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UploadPage from "../index";

/*
    [antd] TypeError: window.matchMedia is not a function
    https://github.com/ant-design/ant-design/issues/21096
 */
Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});

// Upload Button exists
test("upload button click", () => {
  render(
    <BrowserRouter>
      <UploadPage />
    </BrowserRouter>
  );
  const uploadBtn = screen.getByTestId("upload-btn");
  expect(uploadBtn).toHaveTextContent("업로드");
});

// Upload Button click validation

// Product Upload Succeeded
