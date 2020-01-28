import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
// import { ProgressPlugin } from "webpack";

const Layout = props => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
};

ReactDOM.render(
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>this is myt page</p>
    </div>
  </Layout>,
  document.getElementById("app")
);
