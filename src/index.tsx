/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter } from "@solidjs/router";

import "./index.scss";

import Routes from "./Routes";

render(
  () => (
    <HashRouter>
      <Routes />
    </HashRouter>
  ),
  document.getElementById("root")!
);
