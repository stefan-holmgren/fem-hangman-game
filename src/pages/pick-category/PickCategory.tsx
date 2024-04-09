import style from "./PickCategory.module.scss";
import Category from "./components/Category";

import data from "../../assets/data.json";
import { For } from "solid-js";
import Page from "@/components/Page";

export default function PickCategory() {
  const categories = Object.keys(data.categories);

  return (
    <Page title="Pick a Category" backHref="/">
      <ul class={style.categories}>
        <For each={categories}>
          {(category) => (
            <li>
              <Category href={`/play/${category.toLowerCase()}`}>{category}</Category>
            </li>
          )}
        </For>
      </ul>
    </Page>
  );
}
