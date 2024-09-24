import Link from "next/link";

export default function AlgorithmPage() {
  return (
    <main className="container mx-auto font-sans">
      <h1 className="flex justify-center text-2xl font-bold my-16">
        알고리즘 정리
      </h1>
      <ul className="space-y-3 list-decimal">
        <li>
          <Link
            href={"/algorithm/dfs"}
            className="flex space-x-2 hover:text-blue-600"
          >
            <h2 className="font-semibold">DFS</h2>
          </Link>
        </li>
        <li>
          <Link
            href={"/algorithm/bfs"}
            className="flex space-x-2 hover:text-blue-600"
          >
            <h2 className="font-semibold">BFS:</h2>
            <p>가중치 없는 최단거리</p>
          </Link>
        </li>
        <li>
          <Link
            href={"/algorithm/dijkstra"}
            className="flex space-x-2 hover:text-blue-600"
          >
            <h2 className="font-semibold">다익스트라: </h2>
            <p>모든 가중치 양수</p>
          </Link>
        </li>
        <li>
          <Link
            href={"/algorithm/prefix-sum"}
            className="flex space-x-2 hover:text-blue-600"
          >
            <h2 className="font-semibold">누적합</h2>
          </Link>
        </li>
        <li>
          <Link
            href={"/algorithm/dp"}
            className="flex space-x-2 hover:text-blue-600"
          >
            <h2 className="font-semibold">DP</h2>
          </Link>
        </li>
        <li>
          <Link
            href={"/algorithm/greedy"}
            className="flex space-x-2 hover:text-blue-600"
          >
            <h2 className="font-semibold">탐욕법(Greedy)</h2>
            <p></p>
          </Link>
        </li>
        <li>
          <Link
            href={"/algorithm/binary-search"}
            className="flex space-x-2 hover:text-blue-600"
          >
            <h2 className="font-semibold">이진탐색</h2>
            <p></p>
          </Link>
        </li>
        <li>
          <Link
            href={"/algorithm/back-tracking"}
            className="flex space-x-2 hover:text-blue-600"
          >
            <h2 className="font-semibold">백트래킹</h2>
            <p></p>
          </Link>
        </li>
        <li>
          <Link
            href={"/algorithm/two-pointers"}
            className="flex space-x-2 hover:text-blue-600"
          >
            <h2 className="font-semibold">투포인터</h2>
            <p></p>
          </Link>
        </li>

        <li>
          <Link
            href={"/algorithm/floyd-warshall"}
            className="flex space-x-2 hover:text-blue-600"
          >
            <h2 className="font-semibold">플로이드-워셜:</h2>{" "}
            <p>모든 정점과 정점 사이의 최단 경로</p>
          </Link>
        </li>
      </ul>

      <div>구현</div>
      <div>그래프이론</div>
      <div>트리순회</div>
      <div>완탐</div>
      <div>비트마스킹</div>
      <div>라인스위핑</div>
      <div>LIS</div>
      <div>이분탐색</div>
      <div>팬윅트리</div>
      <div>벨만-포드: 음수 가중치 있음</div>
      <div>최단거리</div>
      <div>정렬(거품정렬, 병합정렬, 삽입정렬, 선택정렬, 퀵정렬, 힙정렬)</div>
    </main>
  );
}
