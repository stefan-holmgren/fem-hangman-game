import { JSX, createSignal, onCleanup, onMount } from "solid-js";
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
  // const [backdropRef, setBackdropRef] = createSignal<HTMLDivElement | null>(null);
  const [scrolling, setScrolling] = createSignal(false);
  let backdropRef: HTMLElement | undefined;

  const navigate = useNavigate();

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      navigate(props.backHref);
    }
  };

  const onScroll = () => {
    setScrolling((backdropRef?.scrollTop ?? 0) > 0);
  };

  onMount(() => {
    backdropRef?.addEventListener("scroll", onScroll);
    document.addEventListener("keydown", onKeyDown);
  });

  onCleanup(() => {
    backdropRef?.removeEventListener("scroll", onScroll);
    document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <Backdrop ref={backdropRef} class={`${style.page} ${scrolling() ? style.scrolling : ""}`}>
      <PageHeader title={props.title} backHref={props.backHref} />
      <section class={style["page-content"]}>{props.children}</section>
    </Backdrop>
  );
}
