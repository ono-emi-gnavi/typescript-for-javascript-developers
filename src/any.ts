import axios from 'axios';
export {};
// https://udemy-utils.herokuapp.com/api/v1/articles?token=token123
// npm info axios
// npm install axios@0.19.2

let url:string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
// axios github : https://github.com/axios/axios

// 外部接続
// https://github.com/axios/axios#response-schema
axios.get(url).then(function (response) {
  // any型は好ましくない
  // let data: any = response.data;

  interface Article {
    id: number;
    title: string;
    description: string;
  }
  // let data: Article[] = response.data;
  let data: Article[];
  data = response.data;
  // titleがないとエラーになる
  // data = [
  //   {
  //     id: 1,
  //     description: 'description'
  //   },
  // ];
  console.log(data);
});
