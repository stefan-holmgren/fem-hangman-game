import { JSX } from "solid-js";
import style from "./Backdrop.module.scss";

type BackdropProps = {
  class?: string;
  children?: JSX.Element;
};

export default function Backdrop({ class: className, children }: BackdropProps) {
  return <main class={`${style.backdrop} ${className ?? ""}`}>{children}</main>;
}
