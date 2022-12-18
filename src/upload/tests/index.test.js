import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UploadPage from "../index";
import userEvent from "@testing-library/user-event";
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

describe("upload test", () => {
  // Upload Button exists
  test("Does the upload button exist?", () => {
    render(
      <BrowserRouter>
        <UploadPage />
      </BrowserRouter>
    );
    const uploadBtn = screen.getByTestId("upload-btn");
    expect(uploadBtn).toHaveTextContent("업로드");
  });

  // Upload a product
  test("Does the upload button work?", async () => {
    render(
      <BrowserRouter>
        <UploadPage />
      </BrowserRouter>
    );

    const seller = screen.getByTestId("product-seller");
    userEvent.type(seller, "test");
    expect(seller).toHaveValue("test");

    const name = screen.getByTestId("product-name");
    userEvent.type(name, "test");
    expect(name).toHaveValue("test");

    const price = screen.getByTestId("product-price");
    userEvent.type(price, "test");
    expect(price).toHaveValue("test");

    const intro = screen.getByTestId("product-intro");
    userEvent.type(intro, "test");
    expect(intro).toHaveValue("test");

    const uploadBtn = screen.getByTestId("upload-btn");
    userEvent.click(uploadBtn);

    const mainPageYn = await screen.findByText(/완료했습니다./);
    expect(mainPageYn).toHaveTextContent("완료했습니다.");
  });
});
