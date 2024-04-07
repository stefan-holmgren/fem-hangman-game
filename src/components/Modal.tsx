import { JSX, Ref } from "solid-js";
import style from "./Modal.module.scss";

type ModalProps = {
  ref?: Ref<HTMLDialogElement>;
  class?: string;
  children?: JSX.Element;
};

export default function Modal(props: ModalProps) {
  return (
    <dialog ref={props.ref} class={`${style.modal} ${props.class ?? ""}`}>
      {props.children}
    </dialog>
  );
}
