export {};
// タプル型

// 数値が入れ替わる可能性がある
//let profile: (string | number)[] = ['Ham',43];
// profile = [4,'Ham'];

// 型推論で推奨されないので覚えておく
let profile: [string, number] = ['Ham',43];
// エラーになる
// profile = [4,'Ham'];


