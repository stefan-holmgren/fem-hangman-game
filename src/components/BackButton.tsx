import style from "./BackButton.module.scss";
import backIcon from "/assets/images/icon-back.svg";
import HeaderButton from "./HeaderButton";

type BackButtonProps = {
  href: string;
};

export default function BackButton({ href }: BackButtonProps) {
  return (
    <HeaderButton class={style["back-button"]} href={href}>
      <img src={backIcon} alt="Back" />
    </HeaderButton>
  );
}
