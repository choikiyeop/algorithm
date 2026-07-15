/**
 * 간선을 입력받아 인접 리스트를 만드는 예시
 *
 * const edges = [[0, 1], [0, 2], [1, 2], [2, 3]];
 *
 * const graph = Array.from({ length: n+1 }, () => []);
 * edges.forEach(([a, b]) => {
 *   graph[a].push(b);
 *   graph[b].push(a);
 * });
 */

const graph = []; // 인접 리스트. [1번과 연결된 배열..., 2번과 연결된 배열...]
const start = 0;

bfs(graph, start);

function bfs(graph, start) {
  const distance = Array(graph.length).fill(-1);
  const queue = [start];
  let head = 0;

  distance[start] = 0;

  while (head < queue.length) {
    const cur = queue[head++];

    for (const next of graph[cur]) {
      if (distance[next] !== -1) continue;

      distance[next] = distance[cur] + 1;
      queue.push(next);
    }
  }

  return distance;
}
