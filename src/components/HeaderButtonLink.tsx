import { A, AnchorProps } from "@solidjs/router";
import style from "./HeaderButton.module.scss";
import { splitProps } from "solid-js";

type HeaderButtonLinkProps = AnchorProps;

export default function HeaderButtonLink(props: HeaderButtonLinkProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <A class={`${style["header-button"]} ${local.class ?? ""}`} {...rest} />;
}
