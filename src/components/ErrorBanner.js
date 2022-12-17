import React from "react";

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
