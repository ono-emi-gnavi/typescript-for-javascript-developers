export {};
// 52. nullable type

// tsconfig.jsonで"strictNullChecks": falseにするとnullでもエラーが起きなくなる
// "strictNullChecks": false /* When type checking, take into account 'null' and 'undefined'. */,
// 基本は true にしておく。
// それ以外の方法がユニオン型を使用
// ` | null ` を追記する
let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null,
};
