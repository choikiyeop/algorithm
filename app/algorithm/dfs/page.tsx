"use client";
export default function DfsPage() {
  const execute = () => {
    const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
    const visited = Array(7).fill(false);
    recursiveDFS(graph, 0, visited);
  };

  return (
    <main className="mx-auto w-1/3 my-32">
      <h2>DFS</h2>
      <div>그래프 전체를 탐색하는 알고리즘으로서 깊이를 우선해서 탐색</div>
      <div>스택이나 재귀함수를 이용</div>

      <div>DFS를 사용해야하는 문제</div>
      <div>
        <div>1. 그래프의 모든 노드를 방문하는 문제 </div>
        <p></p>
      </div>
      <div>
        <div>2. 경로의 특징을 저장해둬야 하는 문제</div>
        <p></p>
      </div>
      <button onClick={execute}>DFS 실행</button>
    </main>
  );
}

/**
 * 깊이 우선 탐색
 * 재귀함수를 이용
 * @param graph {array} - 그래프를 나타내는 2차원 배열. 행은 노드 개수이고 열은 연결되어있는 노드 번호
 * @param v {number} - 현재 탐색 중인 노드
 * @param visited {array} - 방문했는지 확인하는 배열
 * @returns
 */
export const recursiveDFS = (
  graph: number[][],
  v: number,
  visited: boolean[]
) => {
  visited[v] = true;
  console.log(v);

  for (let node of graph[v]) {
    if (!visited[node]) {
      recursiveDFS(graph, node, visited);
    }
  }
};

/**
 * 깊이 우선 탐색
 * 스택을 이용 -> 부모 노드로 되돌아가는 로직 구현안함.
 * @param graph {array} - 그래프를 나타내는 2차원 배열. 행은 노드 개수이고 열은 인접 노드의 번호
 * @param start {number} - 방문 시작 노드
 * @param visited {array} - 방문했는지 확인하는 배열
 * @returns
 */
export const iterativeDFS = (
  graph: number[][],
  start: number,
  visited: boolean[]
) => {
  const stack = [];
  stack.push(start);

  while (stack.length) {
    let v = stack.pop() as number;
    if (!visited[v]) {
      console.log(v);
      visited[v] = true;

      for (let node of graph[v]) {
        if (!visited[node]) {
          stack.push(node);
        }
      }
    }
  }
};
