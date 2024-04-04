import { A, AnchorProps } from "@solidjs/router";
import style from "./Button.module.scss";
import { splitProps } from "solid-js";

type ButtonLinkProps = AnchorProps;

export default function ButtonLink(props: ButtonLinkProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <A class={`${style.button} ${local.class ?? ""}`} {...rest} />;
}
