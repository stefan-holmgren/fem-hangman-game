import style from "./PickCategory.module.scss";
import Category from "./components/Category";

import data from "../../assets/data.json";
import { For, onMount } from "solid-js";
import Page from "@/components/Page";

export default function PickCategory() {
  const categories = Object.keys(data.categories);
  let categoriesRef: HTMLUListElement | undefined;

  onMount(() => {
    console.log("categoriesRef", categoriesRef);
  });

  return (
    <Page title="Pick a Category" backHref="/">
      <ul ref={categoriesRef} class={style.categories}>
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
