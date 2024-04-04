import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import GameModal from "@/components/GameModal";

import style from "./PauseMenu.module.scss";

export default function PauseMenu() {
  return (
    <GameModal title="Paused">
      <ul class={style["pause-menu"]}>
        <li>
          <Button>Continue</Button>
        </li>
        <li>
          <ButtonLink href="/pick-category">New Category</ButtonLink>
        </li>
        <li>
          <ButtonLink class={style["quit-button"]} href="/">
            Quit Game
          </ButtonLink>
        </li>
      </ul>
    </GameModal>
  );
}
