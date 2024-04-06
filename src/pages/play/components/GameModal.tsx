import { For, JSX, Show, createContext } from "solid-js";
import Backdrop from "../../../components/Backdrop";
import style from "./GameModal.module.scss";
import Modal from "../../../components/Modal";
import ModalHeader from "../../../components/ModalHeader";
import OutlinedHeader from "../../../components/OutlinedHeader";

export const GameModalContext = createContext({ close: () => {} });

type GameModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  buttons: JSX.Element[];
};

export default function GameModal(props: GameModalProps) {
  return (
    <GameModalContext.Provider value={{ close: () => props.onClose() }}>
      <Show when={props.open}>
        <Backdrop class={style["game-modal"]}>
          <Modal>
            <ModalHeader>
              <OutlinedHeader class={style.header} label={props.title} />
            </ModalHeader>
            <ul class={style["menu"]}>
              <For each={props.buttons}>{(component) => <li>{component}</li>}</For>
            </ul>
          </Modal>
        </Backdrop>
      </Show>
    </GameModalContext.Provider>
  );
}
