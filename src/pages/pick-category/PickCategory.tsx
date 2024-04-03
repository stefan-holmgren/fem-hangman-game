import BackButton from "../../components/BackButton";
import Backdrop from "../../components/Backdrop";
import OutlinedHeader from "../../components/OutlinedHeader";

import style from "./PickCategory.module.scss";
import Category from "./components/Category";

import data from "../../assets/data.json";
import { For } from "solid-js";

export default function PickCategory() {
  const categories = Object.keys(data.categories);

  return (
    <Backdrop class={style["pick-category"]}>
      <header>
        <BackButton href="/" />
        <OutlinedHeader label="Pick a Category" />
      </header>
      <ul>
        <For each={categories}>
          {(category) => (
            <li>
              <Category href={`/play/${category.toLowerCase()}`}>{category}</Category>
            </li>
          )}
        </For>
      </ul>
    </Backdrop>
  );
}
