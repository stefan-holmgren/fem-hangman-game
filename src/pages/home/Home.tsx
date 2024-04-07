import style from "./Home.module.scss";
import logo from "/assets/images/logo.svg";
import PlayButton from "@/components/PlayButton";
import Modal from "@/components/Modal";
import ModalHeader from "@/components/ModalHeader";
import ButtonLink from "@/components/ButtonLink";
import { onMount } from "solid-js";

export default function Home() {
  let modalRef: HTMLDialogElement | undefined;

  onMount(() => {
    modalRef?.show();
  });

  return (
    <main class={style.main}>
      <Modal ref={modalRef} class={style.popup} cancellabe={false}>
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
