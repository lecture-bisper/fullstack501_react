import React, {useState} from "react";
import Child from "./Child";

// 현재 Parent 컴포넌트의 전역 변수로 지정
let data1 = 100;

// Parent 함수 컴포넌트 선언
function Parent(props) {
  // Parent 함수의 지역 변수로 data2 선언, useState를 사용하여 state 객체로 관리
  let [data2, setData2] = useState(200);

  // 클릭 이벤트 시 동작할 함수 선언
  const firstDataChange = () => {
    // 변수 값 직접 수정
    console.log(`data1 : ${++data1}`);
  }

  const secondDataChange = () => {
    // setState 실행
    setData2(++data2);
    console.log(`data2 : ${data2}`);
  }

  return (
    <div className={'border border-2 rounded-3 p-3'}>
      <h3>부모 컴포넌트</h3>

      {/*버튼 이벤트 설정*/}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={firstDataChange}>부모 첫번째 데이터 수정</button>
      <button type={'button'} className={'btn btn-primary'} onClick={secondDataChange}>부모 두번째 데이터 수정</button>

      {/*현재 데이터 값 확인*/}
      <h4 className={'my-3'}><span>data1 : {data1}, data2 : {data2}</span></h4>
      <hr/>

      <Child data1={data1} data2={data2} />
    </div>
  );
}

export default Parent;









