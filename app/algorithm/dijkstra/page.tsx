"use client";
export default function DijkstraPage() {
  const execute = () => {
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

    console.log(dijkstra(graph, s));
  };

  return (
    <div>
      <h1>다익스트라 알고리즘</h1>
      <div>그래프에서 두 노드 사이의 최단거리를 구하는 알고리즘이다.</div>
      <div>DP + BFS를 사용한다.</div>
      <div>※음수 간선이 존재하면 벨만-포드 알고리즘 사용해야 한다.</div>
      <div>플로이드-워셜도 참고</div>
      <button onClick={execute}>실행</button>
    </div>
  );
}

const dijkstra = (graph: number[][][], start: number) => {
  let dist = new Array(graph.length).fill(Infinity);
  let queue = [];

  dist[start] = 0;
  queue.unshift([start, 0]);

  while (queue.length) {
    let [to] = queue.pop();

    graph[to].map((next) => {
      const acc = dist[to] + next[1];
      if (dist[next[0]] > acc) {
        dist[next[0]] = acc;
        queue.unshift(next);
      }
    });
  }

  return dist;
};
