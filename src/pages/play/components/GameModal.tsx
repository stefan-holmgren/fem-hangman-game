import { For, JSX, createContext, onMount } from "solid-js";
import style from "./GameModal.module.scss";
import Modal from "../../../components/Modal";
import ModalHeader from "../../../components/ModalHeader";
import OutlinedHeader from "../../../components/OutlinedHeader";

export const GameModalContext = createContext({ close: () => {} });

type GameModalProps = {
  ref?: (el: HTMLDialogElement) => void;
  title: string;
  buttons: JSX.Element[];
};

export default function GameModal(props: GameModalProps) {
  let modalRef: HTMLDialogElement | undefined;

  return (
    <GameModalContext.Provider value={{ close: () => modalRef?.close() }}>
      <Modal
        cancellabe={false}
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
          <For each={props.buttons}>{(component) => <li>{component}</li>}</For>
        </ul>
      </Modal>
    </GameModalContext.Provider>
  );
}
