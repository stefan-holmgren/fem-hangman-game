import style from "./SecretWord.module.scss";
import { Accessor, For, Setter, createEffect, createSignal, onCleanup, onMount } from "solid-js";

type SecretWordProps = {
  word: string;
  guessedLetters: string[];
};

type SecretLetter = {
  letter: string;
  guessed: Accessor<boolean>;
  setGuessed: Setter<boolean>;
};

const createSecretLetter = (letter: string): SecretLetter => {
  const [guessed, setGuessed] = createSignal(false);
  return { letter, guessed, setGuessed };
};

export default function SecretWord(props: SecretWordProps) {
  const [secretLetters] = createSignal(props.word.toUpperCase().split("").map(createSecretLetter));
  const [breaks, setBreaks] = createSignal<number[]>([]);

  createEffect(() => {
    for (const guessedLetter of props.guessedLetters) {
      const secretLetter = secretLetters().find((letter) => letter.letter === guessedLetter);
      if (secretLetter) {
        secretLetter.setGuessed(true);
      }
    }
  });

  let letterRefs: HTMLSpanElement[] = [];
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
    <For each={secretLetters()}>
      {(letter, index) => {
        return (
          <span classList={{ [style.break]: breaks().includes(index()) }} ref={(el) => letterRefs.push(el)}>
            <span
              classList={{
                [style.letter]: true,
                [style.guessed]: letter.guessed(),
              }}
            >
              {letter.guessed() ? letter.letter : "_"}
            </span>
          </span>
        );
      }}
    </For>
  );
}
