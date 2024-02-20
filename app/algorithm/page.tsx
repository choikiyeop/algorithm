import Link from "next/link";

export default function AlgorithmPage() {
  return (
    <main className="container mx-auto">
      <Link href={"/dfs"}>DFS</Link>
      <Link href={"/bfs"}>BFS</Link>
      <div>누적합 </div>
      <div>구현</div>
      <div>그래프이론</div>
      <div>트리순회</div>
      <div>완탐</div>
      <div>백트래킹</div>
      <div>비트마스킹</div>
      <div>그리디</div>
      <div>라인스위핑</div>
      <div>투포인터</div>
      <div>LIS</div>
      <div>이분탐색</div>
      <div>DP</div>
      <div>최단거리</div>
      <div>팬윅트리</div>
    </main>
  );
}
