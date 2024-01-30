console.log('\n ----- 자바스크립트의 클래스 -----\n');

console.log('\n ----- ES5의 클래스 ----- \n');

// ES5의 클래스 사용 방식
// 함수를 생성
function Shape(x, y) {
  // 필드 선언
  this.name = 'shape';
  this.move(x, y);
}

Shape.create = function (x, y) {
  return new Shape(x, y);
}

// prototype을 사용하여 메소드를 선언
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.area = function () {
  return 0;
}

// Shape.prototype = {
//   move: function (x, y) {
//     this.x = x;
//     this.y = y;
//   },
//   area: function () {
//     return 0;
//   },
// };

var s = Shape.create(0, 0)
console.log(s.area());

var s2 = new Shape(0, 0);
console.log(s2.area());










