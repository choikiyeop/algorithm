"use client";
export default function DijkstraPage() {
  const execute = () => {
    let answer = 0;

    const n = 7,
      s = 3,
      a = 4,
      b = 1;
    const road = [
      [5, 7, 9],
      [4, 6, 4],
      [3, 6, 1],
      [3, 2, 3],
      [2, 1, 6],
    ];
    let graph: number[][][] = Array.from({ length: n + 1 }, () => []);

    for (const [s, e, d] of road) {
      graph[s].push([e, d]);
      graph[e].push([s, d]);
    }

    const dist = dijkstra(graph, s);
    answer = dist[a] + dist[b];

    for (let i = 1; i < n + 1; i++) {
      const together = dijkstra(graph, i);
      console.log(together);
      answer = Math.min(answer, dist[i] + together[a] + together[b]);
    }

    console.log(answer);
  };

  return (
    <main>
      <h1 className="text-2xl font-bold my-8">다익스트라 알고리즘</h1>
      <div>그래프에서 두 노드 사이의 최단거리를 구하는 알고리즘이다.</div>
      <div>DP + BFS를 사용한다.</div>
      <div>※음수 간선이 존재하면 벨만-포드 알고리즘 사용해야 한다.</div>
      <div>플로이드-워셜도 참고</div>
      <button onClick={execute}>실행</button>
    </main>
  );
}

const dijkstra = (graph: number[][][], start: number) => {
  let dist = new Array(graph.length).fill(Infinity);
  let queue = [];

  dist[start] = 0;
  queue.unshift([start, 0]);

  while (queue.length) {
    let [to] = queue.pop();

    graph[to].map((dest) => {
      const acc = dist[to] + dest[1];
      if (dist[dest[0]] > acc) {
        dist[dest[0]] = acc;
        queue.unshift(dest);
      }
    });
  }

  return dist;
};
