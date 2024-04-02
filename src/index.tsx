/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";

import "./index.css";

import Home from "./pages/home";
import HowToPlay from "./pages/how-to-play";
import PickCategory from "./pages/pick-category";
import Play from "./pages/play";

render(
  () => (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/how-to-play" component={HowToPlay} />
      <Route path="/pick-category" component={PickCategory} />
      <Route path="/play/:category" component={Play} />
    </HashRouter>
  ),
  document.getElementById("root")!
);
