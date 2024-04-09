import style from "./Home.module.scss";
import logo from "/assets/images/logo.svg";
import PlayButton from "@/components/PlayButton";
import Modal from "@/components/Modal";
import ModalHeader from "@/components/ModalHeader";
import ButtonLink from "@/components/ButtonLink";
import { onCleanup, onMount } from "solid-js";

export default function Home() {
  let modalRef: HTMLDialogElement | undefined;
  let liRefs: HTMLLIElement[] = [];

  const onKeyDown = (e: KeyboardEvent) => {
    if (!modalRef || !liRefs.length || !modalRef.contains(document.activeElement)) {
      return;
    }

    let liIndex = liRefs.findIndex((li) => li.contains(document.activeElement));
    if (liIndex === -1) {
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        liIndex++;
        break;
      case "ArrowUp":
        liIndex--;
    }

    (liRefs[liIndex]?.firstElementChild as HTMLElement)?.focus();
  };

  onMount(() => {
    modalRef?.show();
    document.addEventListener("keydown", onKeyDown);
  });

  onCleanup(() => {
    document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <main class={style.main}>
      <Modal ref={modalRef} class={style.popup} cancellabe={false}>
        <ModalHeader>
          <img class={style.logo} src={logo} alt="The Hangman Game" />
        </ModalHeader>
        <ul class={style.menu}>
          <li ref={(el) => liRefs.push(el)}>
            <PlayButton href="/pick-category" />
          </li>
          <li ref={(el) => liRefs.push(el)}>
            <ButtonLink href="/how-to-play">How to Play</ButtonLink>
          </li>
        </ul>
      </Modal>
    </main>
  );
}
