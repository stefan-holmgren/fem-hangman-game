import { A } from "@solidjs/router";
import style from "./PlayButton.module.scss";
import playIcon from "/assets/images/icon-play.svg";

type PlayButtonProps = {
  href: string;
};

export default function PlayButton({ href }: PlayButtonProps) {
  return (
    <A class={style["play-button"]} href={href}>
      <img src={playIcon} alt="Play" />
    </A>
  );
}
