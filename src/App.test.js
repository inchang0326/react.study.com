import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    /*
      useNavigate() may be used only in the context of a <Router> component
      https://stackoverflow.com/questions/70491774/usenavigate-may-be-used-only-in-the-context-of-a-router-component
    */
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/상품 업로드/i);
  expect(linkElement).toBeInTheDocument();
  console.log(`=> ${linkElement}`);
});
