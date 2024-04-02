import { A } from "@solidjs/router";
import style from "./home.module.scss";
import logo from "/assets/images/logo.svg";
import playIcon from "/assets/images/icon-play.svg";
export default function Home() {
  return (
    <main class={style.main}>
      <section class={style.popup}>
        <img class={style.logo} src={logo} alt="The Hangman Game" />
        <ul class={style.menu}>
          <li>
            <A class={style["play-button"]} href="/pick-category">
              <img src={playIcon} alt="Play" />
            </A>
          </li>
          <li>
            <A class={style["how-to-play-button"]} href="/how-to-play">
              How to Play
            </A>
          </li>
        </ul>
      </section>
    </main>
  );
}
