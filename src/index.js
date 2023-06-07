import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryContextProvider } from "./Contexts/CategoriesContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <CategoryContextProvider>
  <App />
  </CategoryContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
