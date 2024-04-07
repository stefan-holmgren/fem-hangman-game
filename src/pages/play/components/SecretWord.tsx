import style from "./SecretWord.module.scss";
import { For, createEffect, createSignal, onCleanup, onMount } from "solid-js";

type SecretWordProps = {
  word: string;
  guessedLetters: string[];
};

const createSecretLetter = (letter: string) => {
  const [guessed, setGuessed] = createSignal(false);
  return {
    letter,
    guessed,
    setGuessed,
  };
};

export default function SecretWord(props: SecretWordProps) {
  const [secretLetters] = createSignal(props.word.toUpperCase().split("").map(createSecretLetter));

  // Update guessed state based on guessedLetters prop
  createEffect(() => {
    secretLetters().forEach((secretLetter) => {
      if (props.guessedLetters.includes(secretLetter.letter)) {
        secretLetter.setGuessed(true);
      }
    });
  });

  // Update line breaks based on layout changes
  let letterRefs: HTMLSpanElement[] = [];
  const [breaks, setBreaks] = createSignal<number[]>([]);

  const updateBreaks = () => {
    const newBreaks: number[] = [];
    letterRefs.forEach((el, index) => {
      const previousLetter = letterRefs[index - 1];
      if (previousLetter && el.offsetTop != previousLetter.offsetTop) {
        newBreaks.push(index - 1);
      }
    });
    setBreaks(newBreaks);
  };

  onMount(() => {
    updateBreaks();
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
