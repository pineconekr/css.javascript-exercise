// function addNumber(a, b) {
//   console.log(`함수로 전달받은 a의 값은 ${a}입니다.`);
//   console.log(`함수로 전달받은 a의 값은 ${b}입니다.`);
//   var sum = a + b;
//   console.log(`계산된 결과값은 ${sum} 입니다.`);
//   ("-------------------------------------------");
//   alert(sum);
// }

// addNumber(3, 4);
// var a = function (a, b) {
//   return a + b;
// };

// alert(a(3, 4));

// (function () {		//익명함수, 바로 실행시킴.
//   alert(7);
// })();

var a = () => {
  alert(7);
};

a();
