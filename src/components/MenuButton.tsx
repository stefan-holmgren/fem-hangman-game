import style from "./MenuButton.module.scss";
import menuIcon from "/assets/images/icon-menu.svg";
import HeaderButton from "./HeaderButton";

type MenuButtonProps = {
  onClick: () => void;
};

export default function MenuButton(props: MenuButtonProps) {
  return (
    <HeaderButton class={style["menu-button"]} onClick={() => props.onClick()}>
      <img src={menuIcon} alt="Menu" />
    </HeaderButton>
  );
}
