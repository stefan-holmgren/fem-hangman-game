import Button from "@/components/Button";
import GameModal from "@/pages/play/components/GameModal";
import QuitButton from "./QuitButton";
import PickCategoryButton from "./PickCategoryButton";
import { ComponentProps } from "solid-js";
import GameModalClose from "./GameModalClose";

type GameEndMenuModalProps = Pick<ComponentProps<typeof GameModal>, "title" | "ref"> & {
  onPlayAgain: () => void;
  playAgainEnabled: boolean;
};

export default function GameEndMenuModal(props: GameEndMenuModalProps) {
  return (
    <GameModal
      {...props}
      buttons={[
        <GameModalClose>
          <Button disabled={!props.playAgainEnabled} onClick={() => props.onPlayAgain()}>
            Play again!
          </Button>
        </GameModalClose>,
        <PickCategoryButton />,
        <QuitButton />,
      ]}
    />
  );
}
