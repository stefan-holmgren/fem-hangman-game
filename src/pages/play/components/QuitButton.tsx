import style from "./QuitButton.module.scss";
import ButtonLink from "@/components/ButtonLink";

export default function QuitButton() {
  return (
    <ButtonLink class={style["quit-button"]} href="/">
      Quit Game
    </ButtonLink>
  );
}
