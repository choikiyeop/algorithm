const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input: string[] = [];

rl.on('line', function (line: any) {
    input = [line];
}).on('close', solution);

function solution() {
  console.log(input[0])
}

export default function PrintStringPage() {

  return (
    <div><h2>문자열 출력하기</h2></div>
  )
}