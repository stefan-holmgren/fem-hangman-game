import { For, createSignal } from "solid-js";
import style from "./Letters.module.scss";

type LettersProps = {
  class?: string;
  onLetterClicked: (letter: string) => void;
};

export default function Letters(props: LettersProps) {
  const [userLetters, setUsedLetters] = createSignal<string>("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <ul class={`${style.letters} ${props.class ?? ""}`}>
      <For each={letters}>
        {(letter) => (
          <li>
            <button
              disabled={userLetters().includes(letter)}
              onClick={() => {
                setUsedLetters(userLetters() + letter);
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
