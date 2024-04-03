import style from "./HowToPlay.module.scss";
import OutlinedHeader from "../../components/OutlinedHeader";
import BackButton from "../../components/BackButton";
import TutorialSection from "./components/TutorialSection";
import Backdrop from "../../components/Backdrop";

export default function HowToPlay() {
  return (
    <Backdrop class={style["how-to-play"]}>
      <header>
        <BackButton href="/" />
        <OutlinedHeader label="How to Play" />
      </header>
      <ul class={style.tutorial}>
        <li>
          <TutorialSection index={1} title="Choose a category">
            First, choose a word category, like animals or movies. The computer then randomly selects a secret word from
            that topic and shows you blanks for each letter of the word.
          </TutorialSection>
        </li>
        <li>
          <TutorialSection index={2} title="Guess letters">
            Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If
            it's wrong, you lose some health, which empties after eight incorrect guesses.
          </TutorialSection>
        </li>
        <li>
          <TutorialSection index={3} title="Win or lose">
            You win by guessing all the letters in the word before your health runs out. If the health bar empties
            before you guess the word, you lose.
          </TutorialSection>
        </li>
      </ul>
    </Backdrop>
  );
}
