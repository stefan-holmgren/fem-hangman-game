import Backdrop from "@/components/Backdrop";
import style from "./Play.module.scss";
import { useNavigate, useParams } from "@solidjs/router";
import data from "@/assets/data.json";
import MenuButton from "@/components/MenuButton";
import Health from "./components/Health";
import Letters from "./components/Letters";

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
      <header>
        <div class={style.category}>
          <MenuButton onClick={() => alert("MENU")} />
          <span>{selectedCategoryKey}</span>
        </div>
        <Health percentage={100} />
      </header>
      <Letters onLetterClicked={(letter) => console.log(letter)} />
    </Backdrop>
  );
}
