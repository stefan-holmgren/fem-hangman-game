import style from "./Category.module.scss";
import ButtonLink from "@/components/ButtonLink";
import { ComponentProps } from "solid-js";

type CategoryProps = ComponentProps<typeof ButtonLink>;

export default function Category(props: CategoryProps) {
  return <ButtonLink class={`${style.category} ${props.class ?? ""}`} {...props} />;
}
