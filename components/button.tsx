import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <button
      className="border text-sm px-4 py-2 rounded-md hover:bg-opacity-90 bg-slate-800 text-white"
      {...props}
    />
  );
};
