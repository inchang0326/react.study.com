import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductPage from "../index";

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
