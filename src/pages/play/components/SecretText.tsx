import style from "./SecretText.module.scss";
import { createMemo } from "solid-js";

type SecretTextProps = {
  secretText: string;
  guessedLetters: string[];
};

export default function SecretText(props: SecretTextProps) {
  const words = createMemo(() => props.secretText.split(" "));
  const lowerCaseGuessedLetters = createMemo(() => props.guessedLetters.map((letter) => letter.toLowerCase()));

  const isLetterGuessed = (letter: string) => {
    return lowerCaseGuessedLetters().includes(letter.toLowerCase());
  };

  return (
    <ul class={style["secret-text"]}>
      {words().map((word) => {
        return (
          <li>
            {word.split("").map((letter) => {
              const guessed = isLetterGuessed(letter);
              return (
                <span
                  classList={{
                    [style.guessed]: guessed,
                  }}
                >
                  {guessed ? letter : "_"}
                </span>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
}
