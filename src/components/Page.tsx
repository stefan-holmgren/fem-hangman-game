import { JSX, onCleanup, onMount } from "solid-js";
import Backdrop from "./Backdrop";
import style from "./Page.module.scss";
import PageHeader from "./PageHeader";
import { useNavigate } from "@solidjs/router";

type PageProps = {
  title: string;
  backHref: string;
  children?: JSX.Element;
};

export default function Page(props: PageProps) {
  const navigate = useNavigate();

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      navigate(props.backHref);
    }
  };

  onMount(() => {
    document.addEventListener("keydown", onKeyDown);
  });

  onCleanup(() => {
    document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <Backdrop class={style.page}>
      <PageHeader title={props.title} backHref={props.backHref} />
      {props.children}
    </Backdrop>
  );
}
