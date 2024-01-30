console.log('\n----- 전개 연산자 사용하기 -----\n');

console.log(`
----- 기존 ES5 형식으로 사용 -----
`);

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
console.log(`원본 배열 array1 : ${array1}`);
console.log(`원본 배열 array2 : ${array2}`);

// es5 형식으로 2개의 배열을 합하여 하나의 배열로 만들기
var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log(`배열 combined : ${combined}`);

// es5 형식으로 concat 함수를 사용하여 두개의 배열 내용으로 합쳐진 하나의 배열 생성
var combined = array1.concat(array2);
console.log(`배열 combined : ${combined}`);

var combined = [].concat(array1, array2);
console.log(`배열 combined : ${combined}`);

// es5 형식으로 배열의 요소를 변수에 대입
var first = array1[0];
var second = array1[1];
// 기본값 설정, 지정한 index에 값이 없을 경우 || 이후에 지정한 값을 기본값으로 사용함
var three = array1[2] || 'empty';
console.log('first : ' + first);
console.log(`second : ${second}`);
console.log(`three : ${three}`);

console.log(`
----- ES6 형식으로 사용 -----
`)

var array1 = ['one', 'two', 3, 4, 5, 6, 7, 8, 9];
var array2 = ['three', 'four'];
console.log(`원본 배열 array1 : ${array1}`);
console.log(`원본 배열 array2 : ${array2}`);

// ES6에서 추가된 ... (전개연산자) 를 사용하면 배열 혹은 object의 전체 요소 및 요소 일부를 다른 배열이나 다른 object 타입으로 빠르게 복사가 가능함
var combined = [...array1, ...array2];
console.log(`배열 combined : ${combined}`);

// ES6에서 배열의 요소를 변수에 대입할 경우 = 연산자 왼쪽에 []를 사용하고 [] 안에 변수명을 입력한 후 = 연산자 오른쪽에 배열을 대입
// 배열의 요소를 하나씩 꺼내에서 = 연산자 왼쪽에 있는 요소에 하나씩 대입함
// = 연산자 왼쪽에 있는 요소가 = 연산자 오른쪽의 배열의 index보다 클 경우 대입되는 값은 null임
// 왼쪽 요소에 = 연산자를 사용하여 값을 지정하면 기본 값으로 사용할 수 있음
// 왼쪽 요소에 ... 연산자를 사용 시 = 연산자 오른쪽에 있는 배열 중 나머지 요소를 모두 배열로하여 대입함
var [first, second, three = 'empty', ...others] = array1;
console.log(`first : ${first}`)
console.log(`second : ${second}`);
console.log(`three : ${three}`);
console.log(`others : ${others}`);

console.log(`first의 타입 : ${typeof first}`)
console.log(`three의 타입 : ${typeof three}`)
console.log(`others의 타입 : ${typeof others}`)
console.log(others)










