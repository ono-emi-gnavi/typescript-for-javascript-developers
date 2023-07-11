export {};

class Mahotsukai {}
class Souryo {}

//TSは単一継承のみ
class Taro extends Mahotsukai {}

// 複数のクラスを継承できない
// 複数のインターフェースを継承することができる
// 継承の「ような」ことができる。実際には実装

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}
// シグネチャー

// interfaceの継承はimplementsでできる
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();