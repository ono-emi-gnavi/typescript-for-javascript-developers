export {};

// アロー関数
// let bmi: (height: number, weight: number) => number = (
//   height:number, 
//   weight: number
// ) => {
//   weight / ( height * height );
// }


let bmi: (height: number, weight: number) => number = (
  height:number, 
  weight: number
):number => weight / ( height * height );

 console.log(bmi(1.78,86));