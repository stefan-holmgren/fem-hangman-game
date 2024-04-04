import style from "./BackButton.module.scss";
import backIcon from "/assets/images/icon-back.svg";
import HeaderButton from "./HeaderButton";

type BackButtonProps = {
  href: string;
};

export default function BackButton(props: BackButtonProps) {
  return (
    <HeaderButton as="A" class={style["back-button"]} href={props.href}>
      <img src={backIcon} alt="Back" />
    </HeaderButton>
  );
}
