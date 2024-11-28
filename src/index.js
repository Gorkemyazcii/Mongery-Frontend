import React from "react";
import ReactDOM from "react-dom"; // React 17 için doğru import
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "./index.css"; // Veya Tailwind ile ilgili stil dosyanız

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
