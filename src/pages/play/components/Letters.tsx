import { For, onCleanup, onMount } from "solid-js";
import style from "./Letters.module.scss";

export type LettersRef = {
  focus: () => void;
};

type LettersProps = {
  class?: string;
  onLetterClicked: (letter: string) => void;
  selectedLetters: string[];
  ref?: (ref: LettersRef) => void;
};

const KEYS_PER_ROW = 9;

export default function Letters(props: LettersProps) {
  let keyboardRef: HTMLUListElement | undefined;
  const keyButtons: HTMLButtonElement[] = [];

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  if (props.ref) {
    props.ref?.({
      focus: () => {
        requestAnimationFrame(() => {
          keyButtons[0]?.focus();
        });
      },
    });
  }

  const onKeydown = (e: KeyboardEvent) => {
    const focusedElement = document.activeElement;
    if (!keyboardRef || !keyboardRef.contains(focusedElement)) {
      return;
    }
    const focusedButtonIndex = keyButtons.indexOf(focusedElement as HTMLButtonElement);
    let newIndex: number = focusedButtonIndex;

    switch (e.key) {
      case "ArrowUp":
        newIndex -= KEYS_PER_ROW;
        break;
      case "ArrowDown":
        newIndex += KEYS_PER_ROW;
        break;
      case "ArrowRight":
        newIndex += 1;
        break;
      case "ArrowLeft":
        newIndex -= 1;
        break;
    }

    keyButtons[newIndex]?.focus();
  };

  onMount(() => {
    document.addEventListener("keydown", onKeydown);
  });

  onCleanup(() => {
    document.removeEventListener("keydown", onKeydown);
  });

  return (
    <ul ref={keyboardRef} class={`${style.letters} ${props.class ?? ""}`}>
      <For each={letters}>
        {(letter) => {
          return (
            <li>
              <button
                ref={(el) => keyButtons.push(el)}
                classList={{ [style.disabled]: props.selectedLetters.includes(letter) }}
                onClick={() => {
                  if (props.selectedLetters.includes(letter)) {
                    return;
                  }
                  props.onLetterClicked(letter);
                }}
              >
                {letter}
              </button>
            </li>
          );
        }}
      </For>
    </ul>
  );
}
