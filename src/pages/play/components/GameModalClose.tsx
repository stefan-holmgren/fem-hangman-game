import { GameModalContext } from "./GameModal";
import { JSX, useContext } from "solid-js";

type GameModalCloseProps = {
  children?: JSX.Element;
};

export default function GameModalClose(props: GameModalCloseProps) {
  const gameModalContext = useContext(GameModalContext);
  return (
    <div
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          gameModalContext.close();
        }
      }}
    >
      {props.children}
    </div>
  );
}
