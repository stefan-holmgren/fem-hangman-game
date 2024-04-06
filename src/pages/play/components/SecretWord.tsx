import style from "./SecretWord.module.scss";
import { createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js";

type SecretWordProps = {
  word: string;
  guessedLetters: string[];
};

export default function SecretWord(props: SecretWordProps) {
  const lowerCaseGuessedLetters = createMemo(() => props.guessedLetters.map((letter) => letter.toLowerCase()));
  let letterRefs: HTMLSpanElement[] = [];
  const [breaks, setBreaks] = createSignal<number[]>([]);

  const isLetterGuessed = (letter: string) => {
    return lowerCaseGuessedLetters().includes(letter.toLowerCase());
  };

  const updateBreaks = () => {
    const newBreaks: number[] = [];
    letterRefs.forEach((el, index) => {
      const previousLetter = el.previousElementSibling;
      if (!previousLetter || !(previousLetter instanceof HTMLSpanElement)) {
        return;
      }
      if (el.offsetTop != previousLetter.offsetTop) {
        newBreaks.push(index - 1);
      }
    });
    setBreaks(newBreaks);
  };

  createEffect(updateBreaks);

  onMount(() => {
    window.addEventListener("resize", updateBreaks);
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateBreaks);
  });

  return (
    <>
      {props.word.split("").map((letter, index) => {
        const guessed = isLetterGuessed(letter);
        return (
          <span classList={{ [style.break]: breaks().includes(index) }} ref={(el) => letterRefs.push(el)}>
            <span
              classList={{
                [style.letter]: true,
                [style.guessed]: guessed,
              }}
            >
              {guessed ? letter : "_"}
            </span>
          </span>
        );
      })}
    </>
  );
}
