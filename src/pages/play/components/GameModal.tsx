import { For, JSX, createContext, onCleanup, onMount } from "solid-js";
import style from "./GameModal.module.scss";
import Modal from "../../../components/Modal";
import ModalHeader from "../../../components/ModalHeader";
import OutlinedHeader from "../../../components/OutlinedHeader";

export const GameModalContext = createContext({ close: () => {} });

type GameModalProps = {
  ref?: (el: HTMLDialogElement) => void;
  cancellable?: boolean;
  title: string;
  buttons: JSX.Element[];
};

export default function GameModal(props: GameModalProps) {
  let modalRef: HTMLDialogElement | undefined;
  const liRefs: HTMLLIElement[] = [];

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

    const newLiRef = liRefs[liIndex];

    if (newLiRef) {
      const focusableElement = newLiRef.querySelector("button, [href]") as HTMLElement;
      focusableElement?.focus();
    }

    (liRefs[liIndex]?.firstElementChild as HTMLElement)?.focus();
  };

  onMount(() => {
    document.addEventListener("keydown", onKeyDown);
  });

  onCleanup(() => {
    document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <GameModalContext.Provider value={{ close: () => modalRef?.close() }}>
      <Modal
        cancellabe={props.cancellable}
        ref={(el) => {
          modalRef = el;
          props.ref?.(el);
        }}
        class={style["game-modal"]}
      >
        <ModalHeader>
          <OutlinedHeader class={style.header} label={props.title} />
        </ModalHeader>
        <ul class={style["menu"]}>
          <For each={props.buttons}>{(component) => <li ref={(el) => liRefs.push(el)}>{component}</li>}</For>
        </ul>
      </Modal>
    </GameModalContext.Provider>
  );
}
