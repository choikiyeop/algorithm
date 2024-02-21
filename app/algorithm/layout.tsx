import { ReactNode } from "react";

export default function AlgorithmLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1 className="flex justify-center">알고리즘 정리</h1>
      {children}
    </div>
  );
}
