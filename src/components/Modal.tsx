import { JSX, Ref } from "solid-js";
import style from "./Modal.module.scss";

type ModalProps = {
  cancellable?: boolean;
  ref?: Ref<HTMLDialogElement>;
  class?: string;
  children?: JSX.Element;
  cancellabe?: boolean;
};

export default function Modal(props: ModalProps) {
  return (
    <dialog
      onCancel={(e) => !(props.cancellabe ?? true) && e.preventDefault()}
      ref={props.ref}
      class={`${style.modal} ${props.class ?? ""}`}
    >
      {props.children}
    </dialog>
  );
}
