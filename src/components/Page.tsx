import { JSX } from "solid-js";
import Backdrop from "./Backdrop";
import style from "./Page.module.scss";
import PageHeader from "./PageHeader";

type PageProps = {
  title: string;
  backHref: string;
  children?: JSX.Element;
};

export default function Page(props: PageProps) {
  return (
    <Backdrop class={style.page}>
      <PageHeader title={props.title} backHref={props.backHref} />
      {props.children}
    </Backdrop>
  );
}
