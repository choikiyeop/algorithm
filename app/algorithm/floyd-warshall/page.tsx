"use client";
export default function FloydWarshallPage() {
  const execute = () => {
    const n = 7,
      s = 3,
      a = 4,
      b = 1;
    const fares = [
      [5, 7, 9],
      [4, 6, 4],
      [3, 6, 1],
      [3, 2, 3],
      [2, 1, 6],
    ];
    let graph: number[][] = Array.from({ length: n + 1 }, () =>
      Array(n + 1).fill(Infinity)
    );
    for (let i = 0; i < n + 1; i++) {
      graph[i][i] = 0;
    }
    for (const [s, e, d] of fares) {
      graph[s][e] = d;
      graph[e][s] = d;
    }

    const dist = floydWarshall(graph, n);
    console.log(dist);

    let answer = Infinity;
    for (let i = 1; i < n + 1; i++) {
      answer = Math.min(answer, dist[s][i] + dist[i][a] + dist[i][b]);
    }
    console.log(answer);
  };

  return (
    <main>
      <h1 className="text-2xl font-bold my-8">플로이드-워셜 알고리즘</h1>
      <div>그래프에서 가능한 모든 노드 쌍의 최단거리를 구함</div>
      <div>가중치가 음수일때 사용</div>
      <button onClick={execute}>확인</button>
    </main>
  );
}

/**
 * @params graph[n][m]은 n에서 m까지의 가중치
 */
const floydWarshall = (graph: number[][], N: number) => {
  for (let k = 0; k < N; k++) {
    // 경유지
    for (let i = 0; i < N; i++) {
      // 출발 정점
      for (let j = 0; j < N; j++) {
        // 도착 정점
        if (graph[i][k] === Infinity || graph[k][j] === Infinity) continue;

        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  return graph;
};
