import Backdrop from "@/components/Backdrop";
import style from "./Play.module.scss";
import { useNavigate, useParams } from "@solidjs/router";
import data from "@/assets/data.json";

export default function Play() {
  const { category } = useParams();
  const { categories } = data;
  const navigate = useNavigate();

  const categoryKey = Object.keys(categories).find((c) => c.toLowerCase() === category.toLowerCase());
  if (!categoryKey) {
    navigate("/");
    return;
  }

  return (
    <Backdrop class={style.play}>
      <header>{categoryKey}</header>
    </Backdrop>
  );
}
