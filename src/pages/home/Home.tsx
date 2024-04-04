import style from "./Home.module.scss";
import logo from "/assets/images/logo.svg";
import PlayButton from "@/components/PlayButton";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import ModalHeader from "@/components/ModalHeader";

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
            <Button href="/how-to-play">How to Play</Button>
          </li>
        </ul>
      </Modal>
    </main>
  );
}
