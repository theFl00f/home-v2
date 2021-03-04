import React, {
  DetailedHTMLProps,
  forwardRef,
  TextareaHTMLAttributes,
} from "react";

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { id, label, ...rest },
  ref
) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        cols={20}
        rows={3}
        ref={ref}
        {...rest}
        id={id}
        name={id}
      ></textarea>
    </div>
  );
});

export default Textarea;
