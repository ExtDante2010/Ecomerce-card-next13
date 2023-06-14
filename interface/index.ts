import { MouseEventHandler } from "react";

export interface CustonBottonProps {
  title: string;
  containeStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
