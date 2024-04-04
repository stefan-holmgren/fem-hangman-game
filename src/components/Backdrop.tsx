import { JSX } from "solid-js";
import style from "./Backdrop.module.scss";

type BackdropProps = {
  class?: string;
  children?: JSX.Element;
};

export default function Backdrop(props: BackdropProps) {
  return <main class={`${style.backdrop} ${props.class ?? ""}`}>{props.children}</main>;
}
