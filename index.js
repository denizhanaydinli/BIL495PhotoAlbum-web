import * as React from "react";
import ReactDOM from "react-dom";

import SimpleAppBar from "./src/components/app_bar";

function greeter(person) {
  return "Hello, " + person;
}


ReactDOM.render(
  <div>
    {/* <h1>Hello, world! {greeter("user")} </h1> */}
    <SimpleAppBar>

    </SimpleAppBar>
  </div>,
  document.getElementById('root')
);

greeter("test");

