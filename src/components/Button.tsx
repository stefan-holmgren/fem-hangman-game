import { A, AnchorProps } from "@solidjs/router";
import style from "./Button.module.scss";
import { splitProps } from "solid-js";

type ButtonProps = AnchorProps;

export default function Button(props: ButtonProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <A class={`${style.button} ${local.class ?? ""}`} {...rest} />;
}
