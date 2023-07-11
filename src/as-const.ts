export {};

// 51. constアサーション

let name = 'Atsushi';
name = 'Ham';
let nickname = 'Ham' as const;
// ↓文字型リテラルが定義されているため、再代入は不可
// nickname = 'Hamtaro';

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;
// ↓  as const を記述すると書き込めなくなる。Reed only
// profile.name = 'Ham';
// profile.height = 180;
