import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { type, id, label, ...rest },
  ref
) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input {...rest} id={id} type={type} name={id} ref={ref} />
    </div>
  );
});

export default Input;
