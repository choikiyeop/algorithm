import { ReactNode } from "react";

export default function AlgorithmLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="mx-auto w-1/3 my-16">{children}</div>
    </div>
  );
}
