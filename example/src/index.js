import ErrorBoundary, { HoneyBadgerProvider } from "@honeybadger-io/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const config = {
  api_key:
    process.env.REACT_APP_HONEYBADGER_API_KEY ||
    prompt("Enter the API key for your Honeybadger project:"),
  environment: process.env.NODE_ENV
};

ReactDOM.render(
  <HoneyBadgerProvider config={config}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </HoneyBadgerProvider>,
  document.getElementById("root")
);
