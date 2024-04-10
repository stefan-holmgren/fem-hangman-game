import { Ref, JSX } from "solid-js";
import style from "./Backdrop.module.scss";

type BackdropProps = {
  ref?: Ref<HTMLElement>;
  class?: string;
  children?: JSX.Element;
};

export default function Backdrop(props: BackdropProps) {
  return (
    <main ref={props.ref} class={`${style.backdrop} ${props.class ?? ""}`}>
      {props.children}
    </main>
  );
}
