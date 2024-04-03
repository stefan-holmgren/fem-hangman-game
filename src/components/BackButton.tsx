import { A } from "@solidjs/router";
import style from "./BackButton.module.scss";
import backIcon from "/assets/images/icon-back.svg";

type BackButtonProps = {
  href: string;
};

export default function BackButton({ href }: BackButtonProps) {
  return (
    <A class={style["back-button"]} href={href}>
      <img src={backIcon} alt="Back" />
    </A>
  );
}
