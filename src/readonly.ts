export {};

// readonly 
// 初期化時に設定できる
// public と同じく、省略可能

class VisaCard {
  // readonly owner: string;
  // constructor(owner: string) {
  //   this.owner = owner;
  // }

  // ↓　簡略化できる
  constructor(public readonly owner: string) {}
  // ↓ 以下のように書いても同じ
  //   省略しない方が親切かも
  // constructor(readonly owner: string) {}
}
let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
// ↓ 以下のエラーが出る
// [ERROR] 23:03:46 ⨯ Unable to compile TypeScript:
// src/readonly.ts(12,12): error TS2540: Cannot assign to 'owner' because it is a read-only property.

