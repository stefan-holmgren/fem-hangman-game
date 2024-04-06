import style from "./SecretText.module.scss";
import { createMemo } from "solid-js";
import SecretWord from "./SecretWord";

type SecretTextProps = {
  secretText: string;
  guessedLetters: string[];
};

export default function SecretText(props: SecretTextProps) {
  const words = createMemo(() => props.secretText.split(" "));

  let rootElement: HTMLUListElement | undefined;

  return (
    <ul ref={rootElement} class={style["secret-text"]}>
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
