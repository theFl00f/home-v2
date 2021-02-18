import React, { ButtonHTMLAttributes } from "react";
import { FC } from "react";
import "./button.modules.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "secondary";
  isRounded?: boolean;
}

const Button: FC<Props> = ({
  children,
  buttonType = "primary",
  isRounded = true,
}) => {
  let classes = "btn " + buttonType;
  if (isRounded) {
    classes += " rounded";
  }

  return <button className={classes}>{children}</button>;
};

export default Button;
