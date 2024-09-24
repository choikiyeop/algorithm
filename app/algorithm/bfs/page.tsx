"use client";

import { Button } from "@/components/button";
import { Graph } from "./bfs";

export default function BfsPage() {
  const execute = () => {
    const graph = new Graph();
    for (let i = 1; i <= 1000; i++) {
      graph.addVertex(i);
    }

    graph.addEdge(999, 1000);

    const result = graph.bfs(1000);
    console.log(result);
    // const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
    // const visited = Array(6).fill(false);
    // bfs(graph, 0, visited);
  };

  return (
    <main className="space-y-8">
      <h1 className="text-2xl font-bold">BFS</h1>
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold mb-4">BFS를 사용해야하는 문제</h2>
          <div>1. 그래프의 모든 노드를 방문하는 문제 </div>
          <p></p>
          <div>2. 최단거리를 구해야하는 문제</div>
        </div>
      </section>
      <Button onClick={execute}>BFS 실행</Button>
    </main>
  );
}

/**
 * 너비우선탐색
 * 큐를 이용
 * @param graph
 * @param start
 * @param visited
 * @returns
 */
const bfs = (graph: number[][], start: number, visited: boolean[]) => {
  const queue = [];
  queue.unshift(start);
  visited[start] = true;

  while (queue.length) {
    const v = queue.pop();
    console.log(v);

    for (const node of graph[v!]) {
      if (!visited[node]) {
        queue.unshift(node);
        visited[node] = true;
      }
    }
  }
};
