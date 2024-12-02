import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./main";
import { BrowserRouter } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
