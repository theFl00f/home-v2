import React, { ClassAttributes, InputHTMLAttributes } from "react";
import { FC } from "react";

interface Props {
  label: string;
}

const Input: FC<
  Props &
    InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement>
> = ({ type, id, label, ...rest }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input {...rest} id={id} type={type} name={id} />
    </div>
  );
};

export default Input;
