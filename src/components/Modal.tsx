import { JSX } from "solid-js";
import style from "./Modal.module.scss";

type ModalProps = {
  class?: string;
  children?: JSX.Element;
};

export default function Modal(props: ModalProps) {
  return <div class={`${style.modal} ${props.class ?? ""}`}>{props.children}</div>;
}
