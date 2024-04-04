import style from "./OutlinedHeader.module.scss";

type HeaderLinkProps = {
  label: string;
  class?: string;
};

export default function OutlinedHeader(props: HeaderLinkProps) {
  return (
    <h1 class={`${props.class ?? ""} ${style["header-link"]}`}>
      <span class={style.outline}>{props.label}</span>
      <span class={style.text}>{props.label}</span>
    </h1>
  );
}
