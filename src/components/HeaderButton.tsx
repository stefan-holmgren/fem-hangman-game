import style from "./HeaderButton.module.scss";
import { ComponentProps, splitProps } from "solid-js";

type HeaderButtonProps = ComponentProps<"button">;

export default function HeaderButton(props: HeaderButtonProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <button class={`${style["header-button"]} ${local.class ?? ""}`} {...rest} />;
}
