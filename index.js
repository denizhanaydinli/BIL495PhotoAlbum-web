import * as React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./src/router/app_router";


function greeter(person) {
  return "Hello, " + person;
}


ReactDOM.render(
  <div>
    {/* <h1>Hello, world! {greeter("user")} </h1> */}
    {/* <SimpleAppBar>

    </SimpleAppBar> */}
    <AppRouter />
  </div>,
  document.getElementById('root')
);

greeter("test");

