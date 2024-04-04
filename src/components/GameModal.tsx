import { JSX } from "solid-js";
import Backdrop from "./Backdrop";
import style from "./GameModal.module.scss";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import OutlinedHeader from "./OutlinedHeader";

type GameModalProps = {
  title: string;
  children?: JSX.Element;
};

export default function GameModal(props: GameModalProps) {
  return (
    <Backdrop class={style["game-modal"]}>
      <Modal>
        <ModalHeader>
          <OutlinedHeader class={style.header} label={props.title} />
        </ModalHeader>
        {props.children}
      </Modal>
    </Backdrop>
  );
}
