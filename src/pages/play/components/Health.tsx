import style from "./Health.module.scss";
import heartIcon from "/assets/images/icon-heart.svg";

type HealthProps = {
  percentage: number;
};

export default function Health(props: HealthProps) {
  return (
    <div class={style.health}>
      <div class={style["health-bar"]}>
        <div class={style["health-bar-fill"]} style={{ width: `${100 - props.percentage}%` }} />
      </div>
      <img src={heartIcon} alt="" />
    </div>
  );
}
