import { For } from "solid-js";
import style from "./Letters.module.scss";

type LettersProps = {
  class?: string;
  onLetterClicked: (letter: string) => void;
  selectedLetters: string[];
};

export default function Letters(props: LettersProps) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <ul class={`${style.letters} ${props.class ?? ""}`}>
      <For each={letters}>
        {(letter) => (
          <li>
            <button
              disabled={props.selectedLetters.includes(letter)}
              onClick={() => {
                props.onLetterClicked(letter);
              }}
            >
              {letter}
            </button>
          </li>
        )}
      </For>
    </ul>
  );
}
