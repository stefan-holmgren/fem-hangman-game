import style from "./Home.module.scss";
import logo from "/assets/images/logo.svg";
import PlayButton from "../../components/PlayButton";
import Button from "../../components/Button";

export default function Home() {
  return (
    <main class={style.main}>
      <section class={style.popup}>
        <img class={style.logo} src={logo} alt="The Hangman Game" />
        <ul class={style.menu}>
          <li>
            <PlayButton href="/pick-category" />
          </li>
          <li>
            <Button href="/how-to-play">How to Play</Button>
          </li>
        </ul>
      </section>
    </main>
  );
}
