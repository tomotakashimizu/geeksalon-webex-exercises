const inputText = document.getElementById("input-text");
const inputDate = document.getElementById("input-date");

// const sayHello = function () {
//   console.log("hello");
// };

// // 入力欄の値が変化するたびに、コンソールに hello と表示されています。
// // input イベントは入力欄の値が変化するたびに発生する
// inputText.oninput = sayHello;
// inputDate.oninput = sayHello;

// イベントオブジェクト
// イベントオブジェクトを使うと、起きたイベントに関する情報を取得できます。
// const logValue = function (e) {
//   console.log(e.target.value);
// };

const logValue = function (e) {
  console.log(e);
};

inputText.oninput = logValue;
inputDate.oninput = logValue;

// イベントに紐付けられた関数を特にイベントハンドラ（event handler）という。
// イベントハンドラは、引数にイベントオブジェクトを受け取ることができる。
// input 要素への入力は、引数で e を受け取って e.target.value で使える。
