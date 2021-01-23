// イベントが発生する要素を取得する
const button = document.getElementById("button");
const buttonDiv = document.getElementById("button-div");
const buttonSpan = document.getElementById("button-span");

const alertMessage = function () {
  alert("クリックしたね");
};

const alertHello = function () {
  alert("こんにちは");
};

const alertGoodEvening = function () {
  alert("こんばんは");
};

// 関数を登録
button.onclick = alertMessage;
buttonDiv.onclick = alertHello;
buttonSpan.onclick = alertGoodEvening;

// 高度な別解。関数を返り値とする関数を使います。
// const createAlertMessage = function (message) {
//   return function () {
//     alert(message);
//   };
// };

// buttonDiv.onclick = createAlertMessage("こんにちは");
// buttonSpan.onclick = createAlertMessage("こんばんは");
