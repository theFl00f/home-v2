import React, { ClassAttributes, TextareaHTMLAttributes } from "react";
import { FC } from "react";

interface Props {
  label: string;
}

const Textarea: FC<
  Props &
    TextareaHTMLAttributes<HTMLTextAreaElement> &
    ClassAttributes<HTMLTextAreaElement>
> = ({ id, label, ...rest }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <textarea cols={20} rows={3} {...rest} id={id} name={id}></textarea>
    </div>
  );
};

export default Textarea;
