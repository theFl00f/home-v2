import React, { FC, FormHTMLAttributes } from "react";
import "./form.modules.scss";

const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  ...args
}) => {
  return (
    <form className="form" {...args}>
      {children}
    </form>
  );
};

export default Form;
