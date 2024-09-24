"use client";
export default function PrefixSumPage() {
  const execute = () => {
    const arr = [6, 2, 4, 7, 1, 5, 2, 8, 2, 7];
    const prefixSumArray = prefixSum(arr);
    console.log(prefixSumArray);
  };

  return (
    <main>
      <h1 className="text-2xl font-bold my-8">누적합</h1>
      <div>이전까지 더한 값을 배열에 저장</div>

      <div></div>
      <div>
        <div>
          배열의 범위의 구간 합을 구하고자 할때, 누적합 배열을 이용해 문제 해결
        </div>
      </div>
      <button onClick={execute}>구간합 실행</button>
    </main>
  );
}

/**
 * 누적합 배열을 구하는 함수
 * @param array 누적합 배열을 만들기 위한 배열
 * @returns {Array} prefixSumArray 누적합한 배열 반환
 */
export const prefixSum = (array: number[]): Array<number> => {
  let prefixSumArray = [];
  prefixSumArray[0] = array[0];

  for (let i = 1; i < array.length; i++) {
    prefixSumArray[i] = prefixSumArray[i - 1] + array[i];
  }

  return prefixSumArray;
};
