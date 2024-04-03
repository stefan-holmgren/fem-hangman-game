import Backdrop from "@/components/Backdrop";
import style from "./Play.module.scss";
import { useNavigate, useParams } from "@solidjs/router";
import data from "@/assets/data.json";

export default function Play() {
  const params = useParams();
  const { categories } = data;
  const navigate = useNavigate();

  const selectedCategory = decodeURIComponent(params.category).toLowerCase();
  const selectedCategoryKey = Object.keys(categories).find((c) => c.toLowerCase() === selectedCategory);
  if (!selectedCategoryKey) {
    navigate("/");
    return;
  }

  return (
    <Backdrop class={style.play}>
      <header>{selectedCategoryKey}</header>
    </Backdrop>
  );
}
