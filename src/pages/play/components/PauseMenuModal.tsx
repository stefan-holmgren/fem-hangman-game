import Button from "@/components/Button";
import GameModal from "@/pages/play/components/GameModal";
import GameModalClose from "@/pages/play/components/GameModalClose";
import QuitButton from "./QuitButton";
import PickCategoryButton from "./PickCategoryButton";
import { ComponentProps } from "solid-js";

type PauseMenuModalProps = Pick<ComponentProps<typeof GameModal>, "open" | "onClose">;

export default function PauseMenuModal(props: PauseMenuModalProps) {
  return (
    <GameModal
      title="Paused"
      {...props}
      buttons={[
        <GameModalClose>
          <Button>Continue</Button>
        </GameModalClose>,
        <PickCategoryButton />,
        <QuitButton />,
      ]}
    />
  );
}
