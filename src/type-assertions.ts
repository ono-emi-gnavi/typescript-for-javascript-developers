export {};

// 50. 型アサーション

let name: any = 'Ham';
// let length:number = name.length;
// let length = name.length as number;
// let length = (name as string).length;
// TSでは推奨されていない書き方。REACTで用いられる記法のJSXと似ているから避けたほうが良い。
let length = (<string>name).length;

// length = 'foo';
console.log(length);
