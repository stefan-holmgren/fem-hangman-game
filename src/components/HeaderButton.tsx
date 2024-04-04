import { A, AnchorProps } from "@solidjs/router";
import style from "./HeaderButton.module.scss";
import { JSX, splitProps } from "solid-js";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

type HeaderButtonProps = (AnchorProps & { as: "A" }) | (ButtonProps & { as: "button" });

export default function HeaderButton(props: HeaderButtonProps) {
  const [local, rest] = splitProps(props, ["as", "class"]);

  return local.as === "A" ? (
    <A class={`${style["header-button"]} ${local.class ?? ""}`} {...(rest as AnchorProps)} />
  ) : (
    <button class={`${style["header-button"]} ${local.class ?? ""}`} {...(rest as ButtonProps)} />
  );
}
