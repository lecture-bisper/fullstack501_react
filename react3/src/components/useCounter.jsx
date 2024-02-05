import React, {useState} from 'react';

function useCounter(initValue) {
  // useState를 사용하여 변수 count를 state로 관리 설정
  const [count, setCount] = useState(initValue);

  const incrementCount = () => setCount((count) => count + 1);
  // const incrementCount = () => {
  //   return (
  //     setCount((count) => {
  //       return count + 1;
  //     })
  //   );
  // }
  // Math.max() : 매개변수로 입력받은 값 중 최대값을 구하여 반환하는 함수
  const decrementCount = () => setCount((count) => Math.max(count - 1, 0));
  // const decrementCount = () => {
  //   return setCount((count) => {
  //     return Math.max(count - 1, 0);
  //   })
  // }

  // 배열로 반환, 0번째 index는 현재 count값, 1번 index는 count up, 2번 index는 count down
  return [count, incrementCount, decrementCount];
}

export default useCounter;









