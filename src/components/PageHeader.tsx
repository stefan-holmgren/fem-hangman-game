import BackButton from "./BackButton";
import OutlinedHeader from "./OutlinedHeader";
import style from "./PageHeader.module.scss";

type PageHeaderProps = {
  title: string;
  backHref: string;
};

export default function PageHeader(props: PageHeaderProps) {
  return (
    <header class={style["page-header"]}>
      <BackButton class={style["back-button"]} href={props.backHref} />
      <OutlinedHeader label={props.title} />
    </header>
  );
}
