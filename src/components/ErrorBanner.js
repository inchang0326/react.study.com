import React from "react";

// props 객체 중 message 속성만 받아서 사용하겠다.
function ErrorBanner({ message }) {
  let errMsg = message || "오류가 발생했습니다.";

  return (
    <div
      data-testid="error-banner"
      style={{ backgroundColor: "red", color: "white" }}
    >
      {errMsg}
    </div>
  );
}

export default ErrorBanner;
