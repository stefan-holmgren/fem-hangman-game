import style from "./BackButton.module.scss";
import backIcon from "/assets/images/icon-back.svg";
import HeaderButtonLink from "./HeaderButtonLink";

type BackButtonProps = {
  href: string;
};

export default function BackButton(props: BackButtonProps) {
  return (
    <HeaderButtonLink class={style["back-button"]} href={props.href}>
      <img src={backIcon} alt="Back" />
    </HeaderButtonLink>
  );
}
