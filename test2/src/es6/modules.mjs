// 자바스크립트에서 코드를 별도의 파일로 나누어 사용할 수 있음
// html 파일에서 자바스크립트 파일을 호출하여 사용함
// 자바스크립트 파일도 서로 호출하여 사용하는 것이 가능함
// require 키워드를 사용하여 자바스크립트 파일에서 다른 자바 스크립트 파일을 불러와서 사용함
// ES6 에서는 import/export 가 추가됨
// as : import/export 사용 시 변수, 함수, 클래스의 이름에 별칭을 설정 시 사용
// import : 다른 자바스크립트 모듈에서 제공하는 변수, 함수, 클래스를 가져옴
  // 사용법 :
  // 1. 다른 자바스크립트 모듈에서 export로 제공하는 변수, 함수, 클래스를 가져옴
  // 지정한 것만 가져와서 사용함
  // 현재 모듈의 멤버인 것처럼 사용이 가능(변수, 함수, 클래스 바로 사용)
  // import { 변수명, 함수명, 클래스명 } from "모듈경로";

  // 2. 자른 자바스크립트의 모듈에서 export로 제공하는 모든 것을 한번에 가져옴
  // 가져온 모듈을 사용 시 '별칭명.변수', '별칭명.함수', '별칭명.클래스' 형식으로 사용
  // import * as 별칭 from "모듈경로";

  // 3. import 시 as를 사용하여 별칭을 설정하여 사용 가능
  // 여러개의 모듈을 import 시 중복되는 모듈이 있을 경우 별칭을 사용하여 이름을 바꿔서 사용
  // import { 원본명 as 별칭 } from "모듈경로";

// default import : default export 로 설정된 변수, 함수, 클래스를 가져옴
// 사용할 모듈명에 {} 가 없음
// import 모듈명 from "모듈경로";


// export : 현재 자바스크립트 모듈에서 특정 변수, 함수, 클래스를 다른 자바스크립트 모듈에서 사용할 수 있도록 제공
// named export : 자바스크립트 모듈에서 일반적으로 사용되는 export, 여러개 사용 가능
  // 사용법 :
  // 1. 외부에 제공할 변수에 직접 export 사용
  // export const 변수명;

  // 2. 외부에 제공할 함수에 직접 export 사용
  // export function 함수명() {
  //     실행할 소스코드
  // }

  // 3. 외부에 제공할 클래스에 직접 export 사용
  // export class 클래스명 {
  //   const 필드명
  //   메소드명() {
  //     실행할 소스코드
  //   }
  // }

  // 4. 외부에 제공할 변수, 함수, 클래스를 해당 모듈의 마지막 부분에서 한번에 등록
  // 여러 개의 변수, 함수, 클래스를 등록할 수 있음
  // export {변수명, 함수명, 클래스명 }

// default export : 해당 모듈 안에서 단 1개만 사용할 수 있는 export, 이름 지정을 할 필요가 없음
// export 시 {}가 없음, default 키워드 사용
// export default 모듈명;

// 자바스크립트의 모듈 사용의 기본값은 require 이기 때문에 import/export는 설정이 추가되어야 함 (혹은 mjs 형식의 확장자를 가지는 자바스크립트 파일에서는 import/export를 사용할 수 있음)

// 지정한 모듈에서 export한 변수 가져오기
import {name, age, email, phone, addr} from "./person.mjs";

console.log(`name 값 : ${name}`);
console.log(`age 값 : ${age}`);
console.log(`email : ${email}`);
console.log(`phone 값 : ${phone}`);
console.log(`addr 값 : ${addr}`);

// 지정한 모듈에서 export한 함수 가져오기
import {sum, sub, multi, div} from "./person.mjs";

sum(10, 20);
sub(20, 10);
let result = multi(10);
console.log(`두 수의 곱셈은 ${result}`);
result = div(10, 3);
console.log(`두 수의 나눗셈은 ${result}`);

// 지정한 모듈에서 export한 클래스 가져오기
import {Circle} from "./person.mjs";

const circle = new Circle(10);
result = circle.area(10);
console.log(`클래스 사용하기 : ${result}`);

// * 기호를 사용하여 지정한 모듈의 모든 내용 가져오기
import * as test from "./person2.mjs";
console.log(test.name2);
console.log(test.email2);
test.sum2(10, 20)
test.sub(20, 10);
const circle2 = new test.Circle2(10);
result = circle2.area(10);
console.log(`클래스 사용하기 2 : ${result}`);

// 가져온 모듈에 별칭을 사용하여 다른 모듈과 이름이 겹치는 것을 방지
import {sub as sub2} from "./person2.mjs"
sub(10, 20);
sub2(10, 20);

// default export로 지정된 변수, 함수, 클래스를 가져오기
import multi2 from "./person2.mjs";
multi2(10);







