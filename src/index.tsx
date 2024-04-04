/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter } from "@solidjs/router";

import "./index.css";

import Routes from "./Routes";

render(
  () => (
    <HashRouter>
      <Routes />
    </HashRouter>
  ),
  document.getElementById("root")!
);
