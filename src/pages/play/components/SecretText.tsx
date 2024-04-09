import style from "./SecretText.module.scss";
import { For, createMemo, onCleanup, onMount } from "solid-js";
import SecretWord from "./SecretWord";

type SecretTextProps = {
  class?: string;
  secretText: string;
  guessedLetters: string[];
};

export default function SecretText(props: SecretTextProps) {
  let secretTextRef: HTMLUListElement | undefined;

  const words = createMemo(() => props.secretText.split(" "));

  onMount(() => {
    if (!secretTextRef) {
      return;
    }

    // To have the secret text all "visible" on screen, we need to maybe
    // scale it down. We'll use a ResizeObserver to check if the text is
    // overflowing its container and scale it down until it fits.
    const resizeObserver = new ResizeObserver(() => {
      let scaleFactor = 1;
      secretTextRef.style.setProperty("--scale-factor", "1");
      const scaleFactorStep = 0.1;
      while (secretTextRef.scrollHeight > secretTextRef.clientHeight) {
        scaleFactor -= scaleFactorStep;
        secretTextRef.style.setProperty("--scale-factor", scaleFactor.toString());
      }
    });

    resizeObserver.observe(secretTextRef);

    onCleanup(() => {
      resizeObserver.disconnect();
    });
  });

  return (
    <ul ref={secretTextRef} class={`${style["secret-text"]} ${props.class}`}>
      <For each={words()}>
        {(word) => {
          return (
            <li>
              <SecretWord word={word} guessedLetters={props.guessedLetters} />
            </li>
          );
        }}
      </For>
    </ul>
  );
}
