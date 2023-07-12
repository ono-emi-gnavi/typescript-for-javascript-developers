export {};
// 55. Partial と Required
// パーシャル型
type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

// すべての値プロパティがオプショナルな型になる Partial
// ↓よくないやり方
// type Profile2 = {
//   name?: string;
//   age?: number;
// };
// ↓Profile2と同じ記述になる
type PartialType = Partial<Profile>;

// すべて必須なものに自動変換 Required
type Profile3 = {
  name: string;
  age?: number;
  zipCode: number;
};
type RequiredType = Required<Profile3>;
