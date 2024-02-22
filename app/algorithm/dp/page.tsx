"use client";
export default function DpPage() {
  const execute = () => {
    const result = dp([1, 3, 1, 5], 4, (value, nextValue) =>
      Math.max(value, nextValue)
    );
    console.log(result);
  };

  return (
    <div>
      <h1>DP</h1>
      <button onClick={execute}>DP 실행</button>
    </div>
  );
}

export const dp = (
  array: number[],
  N: number,
  fn: (value: number, nextValue: number) => number
) => {
  let dpArray = new Array(N).fill(0);
  dpArray[0] = array[0];

  dpArray[1] = fn(array[0], array[1]);

  for (let i = 2; i <= array.length; i++) {
    dpArray[i] = fn(dpArray[i - 1], dpArray[i - 2] + array[i]);
  }

  return dpArray[N - 1];
};
