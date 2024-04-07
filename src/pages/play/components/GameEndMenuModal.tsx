import Button from "@/components/Button";
import GameModal from "@/pages/play/components/GameModal";
import QuitButton from "./QuitButton";
import PickCategoryButton from "./PickCategoryButton";
import GameModalClose from "./GameModalClose";
import { createSignal, onMount } from "solid-js";

export type GameEndMenuModalRef = {
  showModal: (props: { title: string }) => void;
};

type GameEndMenuModalProps = {
  ref?: (ref: GameEndMenuModalRef) => void;
  onPlayAgain: () => void;
  playAgainEnabled: boolean;
};

export default function GameEndMenuModal(props: GameEndMenuModalProps) {
  const [ref, setRef] = createSignal<HTMLDialogElement | undefined>(undefined);
  const [title, setTitle] = createSignal("");

  const gameEndMenuModalRef: GameEndMenuModalRef = {
    showModal: (props) => {
      setTitle(props.title);
      ref()?.showModal();
    },
  };

  onMount(() => {
    props.ref?.(gameEndMenuModalRef);
  });

  return (
    <GameModal
      ref={setRef}
      title={title()}
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
