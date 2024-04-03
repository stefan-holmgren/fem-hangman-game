import { JSX } from "solid-js";
import style from "./TutorialSection.module.scss";

type TutorialSectionProps = {
  index: number;
  title: string;
  children?: JSX.Element;
};

export default function TutorialSection({ index, title, children }: TutorialSectionProps) {
  const paddedIndex = index < 10 ? `0${index}` : `${index}`;

  return (
    <section class={style["tutorial-section"]}>
      <h2>
        <span class={style["index"]}>{paddedIndex}</span>
        <span class={style["title"]}>{title}</span>
      </h2>
      <div>{children}</div>
    </section>
  );
}
