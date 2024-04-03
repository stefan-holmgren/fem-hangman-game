import { createSignal, onMount } from "solid-js";
import style from "./OutlinedHeader.module.scss";

type HeaderLinkProps = {
  label: string;
  class?: string;
};

export default function OutlinedHeader({ class: className, label }: HeaderLinkProps) {
  const [ref, setRef] = createSignal<HTMLHeadingElement>();

  onMount(() => {
    ref()?.style.setProperty("--content", `'${label}'`);
  });

  return (
    <h1 ref={setRef} class={`${className ?? ""} ${style["header-link"]}`}>
      <span class={style.outline}>{label}</span>
      <span class={style.text}>{label}</span>
    </h1>
  );
}
