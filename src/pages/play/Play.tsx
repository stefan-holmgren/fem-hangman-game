import Backdrop from "@/components/Backdrop";
import style from "./Play.module.scss";
import { useNavigate, useParams } from "@solidjs/router";
import data from "@/assets/data.json";
import MenuButton from "@/components/MenuButton";
import Health from "./components/Health";
import Letters from "./components/Letters";
import PauseMenuModal from "./components/PauseMenuModal";
import GameEndMenuModal from "./components/GameEndMenuModal";
import { createMemo, createSignal, onMount } from "solid-js";
import SecretText from "./components/SecretText";

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
  const [pauseMenuOpen, setPauseMenuOpen] = createSignal(false);
  const [gameEndMenuOpen, setGameEndMenuOpen] = createSignal(false);
  const [gameEndTitle, setGameEndTitle] = createSignal("You Win");
  const [selectedText, setSelectedText] = createSignal("");
  const [guessedLetters, setGuessedLetters] = createSignal<string[]>([]);
  const [remainingLetters, setRemainingLetters] = createSignal<Set<string>>(new Set());
  const [health, setHealth] = createSignal(MAX_HEALTH);

  const healthPercentage = createMemo(() => (health() / MAX_HEALTH) * 100);

  if (!selectedCategoryKey) {
    navigate("/");
    return;
  }

  const getRemainingTexts = () => categories[selectedCategoryKey].filter((text) => !text.selected);
  const getRandomText = () => getRemainingTexts()[Math.floor(Math.random() * getRemainingTexts().length)];

  const deconstructText = (text: string) =>
    new Set(
      text
        .toUpperCase()
        .split("")
        .filter((char) => char !== " ")
    );

  const startGame = () => {
    setHealth(MAX_HEALTH);
    setGuessedLetters([]);
    const randomText = getRandomText();
    if (randomText) {
      randomText.selected = true;
      setSelectedText(randomText.name);
      setRemainingLetters(deconstructText(randomText.name));
    }
  };

  const winGame = () => {
    setGameEndTitle("You Win");
    setGameEndMenuOpen(true);
  };

  const loseGame = () => {
    setGameEndTitle("You Lose");
    setGameEndMenuOpen(true);
  };

  const wrongGuess = () => {
    setHealth(health() - 1);
    if (health() <= 0) {
      loseGame();
    }
  };

  const goodGuess = (letter: string) => {
    remainingLetters().delete(letter);
    setRemainingLetters(new Set(remainingLetters()));
    if (remainingLetters().size === 0) {
      winGame();
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

  onMount(startGame);

  return (
    <>
      <Backdrop class={style.play}>
        <header>
          <div class={style.category}>
            <MenuButton onClick={() => setPauseMenuOpen(true)} />
            <span>{selectedCategoryKey}</span>
          </div>
          <Health percentage={healthPercentage()} />
        </header>
        <SecretText secretText={selectedText()} guessedLetters={guessedLetters()} />
        <Letters selectedLetters={guessedLetters()} onLetterClicked={guess} />
      </Backdrop>
      <PauseMenuModal open={pauseMenuOpen()} onClose={() => setPauseMenuOpen(false)} />
      <GameEndMenuModal
        open={gameEndMenuOpen()}
        onClose={() => setGameEndMenuOpen(false)}
        title={gameEndTitle()}
        playAgainEnabled={getRemainingTexts().length > 0}
        onPlayAgain={() => startGame()}
      />
    </>
  );
}
