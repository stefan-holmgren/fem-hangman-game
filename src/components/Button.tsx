import { A, AnchorProps } from "@solidjs/router";
import style from "./Button.module.scss";

type ButtonProps = AnchorProps;

export default function Button({ class: className, ...props }: ButtonProps) {
  return <A class={style.button} {...props} />;
}
