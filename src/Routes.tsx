import { Route } from "@solidjs/router";
import Home from "./pages/home/Home";
import HowToPlay from "./pages/how-to-play/HowToPlay";
import PickCategory from "./pages/pick-category/PickCategory";
import Play from "./pages/play/Play";

export default function Routes() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/how-to-play" component={HowToPlay} />
      <Route path="/pick-category" component={PickCategory} />
      <Route path="/play/:category" component={Play} />
    </>
  );
}
