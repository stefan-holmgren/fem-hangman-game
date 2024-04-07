import Button from "@/components/Button";
import GameModal from "@/pages/play/components/GameModal";
import GameModalClose from "@/pages/play/components/GameModalClose";
import QuitButton from "./QuitButton";
import PickCategoryButton from "./PickCategoryButton";

type PauseMenuModalProps = {
  ref?: (el: HTMLDialogElement) => void;
};

export default function PauseMenuModal(props: PauseMenuModalProps) {
  return (
    <GameModal
      ref={props.ref}
      title="Paused"
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
