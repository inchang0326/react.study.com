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
  /*
    getBy..()   : 찾는 요소가 없으면 오류 발생, 둘 이상의 요소가 발견되면 오류 발생(=> getAllBy..())
    queryBy..() : 찾는 요소가 없으면 null 반환, 둘 이상의 요소가 발견되면 오류 발생(=> queryAllBy..())
    findBy..()  : 찾는 요소가 없으면 오류 발생, 둘 이상의 요소가 발견되면 오류 발생(=> findAllBy..())
                  요소가 발견되면 다른 것과 달리, Promise 반환. 기본 제한시간인 1000ms.
                  findBy..() = getBy..() + waitFor(일정 시간 동안 기다림)
  */
  expect(linkElement).toBeInTheDocument();
  console.log(`=> ${linkElement}`);
});
