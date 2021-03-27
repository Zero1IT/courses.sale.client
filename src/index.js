import "bootstrap/dist/css/bootstrap.min.css";

import "./css/icons/icofont.min.css";
import "./css/custom.scss";
import "./js/external.js";
import "./css/fonts/css/fontawesome.min.css"
import "./css/fonts/css/all.css"
import "./css/fonts/css/solid.css"

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./app/App";
import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "./app/storage/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const redux = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={redux}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.info);
