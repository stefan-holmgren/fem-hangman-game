import Backdrop from "@/components/Backdrop";
import style from "./Play.module.scss";
import { useNavigate, useParams } from "@solidjs/router";
import data from "@/assets/data.json";
import MenuButton from "@/components/MenuButton";
import Health from "./components/Health";
import Letters, { LettersRef } from "./components/Letters";
import PauseMenuModal from "./components/PauseMenuModal";
import GameEndMenuModal, { GameEndMenuModalRef } from "./components/GameEndMenuModal";
import { createMemo, createSignal, onCleanup, onMount } from "solid-js";
import SecretText from "./components/SecretText";
import { extractUniqueCharacters } from "@/utils/extractUniqueCharacters";

// The max health (turns) the player has to guess the word(s)
const MAX_HEALTH = 8;

export default function Play() {
  const params = useParams();
  const { categories } = data;
  const navigate = useNavigate();
  const selectedCategory = decodeURIComponent(params.category).toLowerCase();
  const selectedCategoryKey = Object.keys(categories).find(
    (c) => c.toLowerCase() === selectedCategory
  ) as keyof typeof categories;

  if (!selectedCategoryKey) {
    navigate("/");
    return;
  }

  const [selectedText, setSelectedText] = createSignal("");
  const [guessedLetters, setGuessedLetters] = createSignal<string[]>([]);
  const [remainingLetters, setRemainingLetters] = createSignal<Set<string>>(new Set());
  const [health, setHealth] = createSignal(MAX_HEALTH);

  let pauseMenuModalRef: HTMLDialogElement | undefined;
  let gameEndMenuModalRef: GameEndMenuModalRef | undefined;
  let lettersRef: LettersRef | undefined;

  const healthPercentage = createMemo(() => (health() / MAX_HEALTH) * 100);
  const isDialogOpen = () => pauseMenuModalRef?.open || gameEndMenuModalRef?.el()?.open;
  const getRemainingTexts = () => categories[selectedCategoryKey].filter((text) => !text.selected);
  const getRandomText = () => getRemainingTexts()[Math.floor(Math.random() * getRemainingTexts().length)];

  const startGame = () => {
    setHealth(MAX_HEALTH);
    setGuessedLetters([]);
    const randomText = getRandomText();
    if (randomText) {
      randomText.selected = true;
      setSelectedText(randomText.name);
      setRemainingLetters(extractUniqueCharacters(randomText.name));
    }

    lettersRef?.focus();
  };

  const endGame = (title: string) => {
    gameEndMenuModalRef?.showModal({ title });
  };

  const wrongGuess = () => {
    setHealth(health() - 1);
    if (health() <= 0) {
      endGame("You Lose");
    }
  };

  const goodGuess = (letter: string) => {
    remainingLetters().delete(letter);
    setRemainingLetters(new Set(remainingLetters()));
    if (remainingLetters().size === 0) {
      endGame("You Win");
    }
  };

  const guess = (letter: string) => {
    setGuessedLetters([...guessedLetters(), letter]);
    if (!remainingLetters().has(letter)) {
      wrongGuess();
      return;
    }
    goodGuess(letter);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (isDialogOpen()) {
      return;
    }

    if (e.key === "Escape") {
      pauseMenuModalRef?.showModal();
      e.preventDefault();
      return;
    }

    const key = e.key.toUpperCase();

    if (guessedLetters().includes(key)) {
      return;
    }
    if (key.match(/^[A-Z]$/)) {
      guess(key);
      lettersRef?.focusLetter(key);
    }
  };

  onMount(() => {
    startGame();
    document.addEventListener("keydown", onKeyDown);
  });

  onCleanup(() => {
    document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <>
      <Backdrop class={style.play}>
        <header>
          <div class={style.category}>
            <MenuButton
              onClick={() => {
                pauseMenuModalRef?.showModal();
              }}
            />
            <span>{selectedCategoryKey}</span>
          </div>
          <Health percentage={healthPercentage()} />
        </header>
        <SecretText class={style["secret-text"]} secretText={selectedText()} guessedLetters={guessedLetters()} />
        <Letters ref={(ref) => (lettersRef = ref)} selectedLetters={guessedLetters()} onLetterClicked={guess} />
      </Backdrop>
      <PauseMenuModal ref={(el) => (pauseMenuModalRef = el)} />
      <GameEndMenuModal
        ref={(el) => (gameEndMenuModalRef = el)}
        playAgainEnabled={getRemainingTexts().length > 0}
        onPlayAgain={() => startGame()}
      />
    </>
  );
}
