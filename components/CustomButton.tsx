"use client";

import { CustonBottonProps } from "../interface/index";

const CustomButton = ({
  title,
  handleClick,
  containeStyles,
  btnType,
}: CustonBottonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containeStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
