import style from "./ModalHeader.module.scss";
import { JSX } from "solid-js";

type ModalHeaderProps = {
  class?: string;
  children?: JSX.Element;
};

export default function ModalHeader(props: ModalHeaderProps) {
  return <header class={`${style["modal-header"]} ${props.class ?? ""}`}>{props.children}</header>;
}
