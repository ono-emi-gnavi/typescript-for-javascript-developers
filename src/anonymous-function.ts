export {};
// アノテーション
// let bmi: (height: number, weight: number) => number 

let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight:number 
  ): number{
    return weight/ ( height * height);
  };


console.log(bmi(1.78, 86));