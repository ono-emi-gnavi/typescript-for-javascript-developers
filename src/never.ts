export {};

// 呼び元に戻ってこない: never
function error(messege: string): never {
  // 例外処理
  throw new Error(messege);
}

try{
  error('test')
} catch(error) {
  console.log({ error });
}

// returnする値がないが戻ってくる
// never は戻ってこない

let foo: void = undefined;
let bar: never = error('only me!');
