import style from "./PickCategory.module.scss";
import Category from "./components/Category";

import data from "../../assets/data.json";
import { For, onCleanup, onMount } from "solid-js";
import Page from "@/components/Page";

export default function PickCategory() {
  const liRefs: HTMLLIElement[] = [];
  let categoriesRef: HTMLUListElement | undefined;

  const categories = Object.keys(data.categories);

  const onKeyDown = (e: KeyboardEvent) => {
    if (!categoriesRef || !liRefs.length || !categoriesRef.contains(document.activeElement)) {
      return;
    }

    let liIndex = liRefs.findIndex((liRef) => liRef.contains(document.activeElement));
    if (liIndex === -1) {
      return;
    }

    const columns = parseInt(getComputedStyle(categoriesRef).getPropertyValue("--columns") ?? "-1", 10);

    if (columns === -1) {
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        liIndex += columns;
        break;
      case "ArrowUp":
        liIndex -= columns;
        break;
      case "ArrowRight":
        if (columns > 1) {
          liIndex += 1;
        }
        break;
      case "ArrowLeft":
        if (columns > 1) {
          liIndex -= 1;
        }
        break;
    }

    (liRefs[liIndex]?.firstElementChild as HTMLElement)?.focus();
  };

  onMount(() => {
    (liRefs[0]?.firstElementChild as HTMLElement)?.focus();
    document.addEventListener("keydown", onKeyDown);
  });

  onCleanup(() => {
    document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <Page title="Pick a Category" backHref="/">
      <ul ref={categoriesRef} class={style.categories}>
        <For each={categories}>
          {(category) => (
            <li ref={(el) => liRefs.push(el)}>
              <Category href={`/play/${category.toLowerCase()}`}>{category}</Category>
            </li>
          )}
        </For>
      </ul>
    </Page>
  );
}
