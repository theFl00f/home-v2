import React, {
  InputHTMLAttributes,
  forwardRef,
  DetailedHTMLProps,
} from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  placeholder: string;
}

const HPInput = forwardRef<HTMLInputElement, Props>(function HPInput(
  { name, placeholder },
  ref
) {
  return (
    <>
      <label className="ohmyhoney" htmlFor={name} aria-hidden={true}>
        This field has been added to reduce spam. If you&apos;re a human, please
        leave this field empty!
      </label>
      <input
        ref={ref}
        className="ohmyhoney"
        autoComplete="off"
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
});

export default HPInput;
