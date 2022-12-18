import { render, screen } from "@testing-library/react";
import MainPage from "../index";
import { BrowserRouter } from "react-router-dom";
import ErrorBanner from "../../components/ErrorBanner";

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

// API Fetch Succeeded
test("Show all product list", async () => {
  render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
  // API fetch requires async, await
  const proudctImgs = await screen.findAllByRole("img", { name: /product/ });
  expect(proudctImgs).toHaveLength(5);
});

// API Fetch Failed
test("Main Page API fetch failed", async () => {
  render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("Error");
});
