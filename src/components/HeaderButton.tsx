import { A, AnchorProps } from "@solidjs/router";
import style from "./HeaderButton.module.scss";

type HeaderButtonProps = AnchorProps;

export default function HeaderButton({ class: className, ...props }: HeaderButtonProps) {
  return <A class={`${style["header-button"]} ${className ?? ""}`} {...props} />;
}
