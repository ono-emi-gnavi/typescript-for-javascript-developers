export {};
// overloads

// シグネイチャー
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') value * 2;

  return value + value;
}

// function double(value: number) {
//   return value *2;
// }
// function double(value: string) {
//   return value + value;
// }

console.log(double(100));
console.log(double('GO '));
// コンパイラエラーが起きる
// console.log(double(true));
