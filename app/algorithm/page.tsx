import Link from "next/link";

export default function AlgorithmPage() {
  const a = true;
  Number(a);
  return (
    <main className="container mx-auto">
      <Link href={"/algorithm/dfs"}>DFS</Link>
      <Link href={"/algorithm/bfs"}>BFS</Link>
      <Link href={"/algorithm/dijkstra"}>다익스트라</Link>
      <Link href={"/algorithm/prefix-sum"}>누적합</Link>
      <Link href={"/algorithm/dp"}>DP</Link>
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
      <div>최단거리</div>
      <div>팬윅트리</div>
    </main>
  );
}
