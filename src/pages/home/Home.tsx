import style from "./Home.module.scss";
import logo from "/assets/images/logo.svg";
import PlayButton from "@/components/PlayButton";
import Modal from "@/components/Modal";
import ModalHeader from "@/components/ModalHeader";
import ButtonLink from "@/components/ButtonLink";

export default function Home() {
  return (
    <main class={style.main}>
      <Modal class={style.popup}>
        <ModalHeader>
          <img class={style.logo} src={logo} alt="The Hangman Game" />
        </ModalHeader>
        <ul class={style.menu}>
          <li>
            <PlayButton href="/pick-category" />
          </li>
          <li>
            <ButtonLink href="/how-to-play">How to Play</ButtonLink>
          </li>
        </ul>
      </Modal>
    </main>
  );
}
