import { ReactNode } from "react";

export default function AlgorithmLayout({ children }: { children: ReactNode }) {
  return (
    <div className="my-16">
      <h1 className="flex justify-center text-lg font-bold">알고리즘 정리</h1>
      <div className="mx-auto w-1/3 mt-16">{children}</div>
    </div>
  );
}
