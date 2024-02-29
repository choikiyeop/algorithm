import Link from "next/link";

export default function AlgorithmPage() {
  const a = true;
  Number(a);
  return (
    <main className="container mx-auto">
      <Link href={"/algorithm/dfs"}>DFS</Link>
      <Link href={"/algorithm/bfs"}>BFS: 가중치 없는 최단거리</Link>
      <Link href={"/algorithm/dijkstra"}>다익스트라: 모든 가중치 양수</Link>
      <Link href={"/algorithm/floyd-warshall"}>
        플로이드-워셜: 모든 정점과 정점 사이의 최단 경로
      </Link>
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
      <div>벨만-포드: 음수 가중치 있음</div>
    </main>
  );
}
