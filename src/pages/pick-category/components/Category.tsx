import { A, AnchorProps } from "@solidjs/router";
import style from "./Category.module.scss";
import buttonStyle from "@/components/Button.module.scss";

type CategoryProps = AnchorProps;

export default function Category(props: CategoryProps) {
  return <A class={`${buttonStyle.button} ${style.category}`} {...props} />;
}
