import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { DatasProvider } from "./providers/dataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DatasProvider>
      <App />
    </DatasProvider>
  </React.StrictMode>
);
