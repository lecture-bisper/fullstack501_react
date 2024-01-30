console.log('\n ----- ES6에서 클래스 사용 -----\n');

// ES6에서 class 키워드를 지원함
// ES6의 클래스는 자바의 클래스와 비슷함

// Shape 클래스 선언
class Shape {
  // 정적 멤버 선언, 객체 생성없이 해당 멤버 사용 가능
  static create(x, y) {
    return new Shape(x, y);
  }

  // 클래스의 필드 선언
  name = 'shape';

  // 클래스의 생성자 선언
  // 자바스크립트에서는 클래스의 생성자는 단 1개만 제공
  // 자바스크립트의 생성자 이름은 constructor로 고정됨
  constructor(x, y) {
    this.move(x, y);
  }

  move(x, y) {
    // this.변수명 사용 시 클래스의 필드로 인식
    this.x = x;
    this.y = y;
  }

  // 클래스의 메소드 선언
  area() {
    return 0;
  }
}

// 자바스크립트 클래스의 객체 생성 시 반드시 new 키워드 사용
// new 키워드로 호출하는 것은 해당 클래스의 생성자
var s = new Shape(10, 20);
console.log(s.area())
s.move(100, 200)
console.log(s.area())


console.log('\n ----- ES6의 클래스 상속 -----\n');
// extends 키워드를 사용하여 클래스 상속을 구현함
// Shape 클래스를 상속받는 Circle 클래스 선언
class Circle extends Shape {
  constructor(x, y, radius) {
    // 부모 클래스의 생성자 호출
    super(x, y);
    // 객체의 필드 선언
    this.radius = radius;
  }

  // 부모 클래스의 멤버 메소드를 수정하여 오버라이딩 지원
  area() {
    if (this.radius === 0) {
      return super.area();
    }
    return this.radius * this.radius;
  }
}

var c = new Circle(0, 0, 10);
console.log(c.area());









