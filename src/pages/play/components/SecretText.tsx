import style from "./SecretText.module.scss";
import { createMemo } from "solid-js";
import SecretWord from "./SecretWord";

type SecretTextProps = {
  class?: string;
  secretText: string;
  guessedLetters: string[];
};

export default function SecretText(props: SecretTextProps) {
  const words = createMemo(() => props.secretText.split(" "));

  return (
    <ul class={`${style["secret-text"]} ${props.class}`}>
      {words().map((word) => {
        return (
          <li>
            <SecretWord word={word} guessedLetters={props.guessedLetters} />
          </li>
        );
      })}
    </ul>
  );
}
