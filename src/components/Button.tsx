import style from "./Button.module.scss";
import { ComponentProps, splitProps } from "solid-js";

type ButtonProps = ComponentProps<"button">;

export default function Button(props: ButtonProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <button class={`${style.button} ${local.class ?? ""}`} {...rest} />;
}
