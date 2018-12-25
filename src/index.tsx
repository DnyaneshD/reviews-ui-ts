import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import "./index.css";
import configureStore from "./store/configureStore";
//import "bootstrap/dist/css/bootstrap.min.css";
import App from "../src/App/App";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
