import React from 'react';
import axios from "axios";

// axios : ajax 비동기 통신하기 위한 자바스크립트 라이브러리
// 사용 시 해당 컴포넌트에 import하여 사용
// 단축 메소드를 제공하고 있음, get, post, put, delete
// then(콜백함수) : 데이터 통신 성공 시 자동 동작하는 부분
// catch(콜백함수) : 데이터 통신 실패 시 자동 동작하는 부분

// 문법:
// axios({
//     url: '접속 주소',
//     method: '통신 방식',
//     data: { 파라미터 값으로 보낼 데이터 }
// });

// 사용법
// 설치 : npm install axios
// 사용 :
// import axios from "axios";
// axios.명령어(접속 주소, 매개변수)
// .then(response => { {접속 성공 시 처리할 소스코드} )
// .catch(error => {접속 실패 시 처리할 소스코드} )

// axios.get('http://localhost:8080/login?id=asdf&pw1234')
// .then(res => { 성공 시 처리할 소스 })
// .catch(err => { 실패 시 처리할 소스});

// axios.get('http://localhost:8080/login', {
//     params: {
//       id: 'asdf',
//       pw: '1234'
//     }})
//  .then(res => { 성공 시 처리할 소스} )
//  .catch(err => { 실패 시 처리할 소스} );

// axios.post('http://localhost:8080/login', {
//     id: 'asdf',
//     pw: '1234'
//     })
//  .then(res => { 성공 시 처리할 소스} )
//  .catch(err => { 실패 시 처리할 소스} );

// axios.delete('http://localhost:8080/login?id=asdf')
//  .then(res => { 성공 시 처리할 소스} )
//  .catch(err => { 실패 시 처리할 소스} );

// axios.delete('http://localhost:8080/login', {
//    data: {
//      id: 'asdf',
//      pw: '1234'
//    }})
//  .then(res => { 성공 시 처리할 소스} )
//  .catch(err => { 실패 시 처리할 소스} );

// axios.put('http://localhost:8080/login', {
//    id: 'asdf',
//    pw: '1234'
//    }})
//  .then(res => { 성공 시 처리할 소스} )
//  .catch(err => { 실패 시 처리할 소스} );

function AxiosTest(props) {

  const buttonClick = () => {
    axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240206')
      .then(res => {
        console.log('비동기 통신이 성공했습니다.');
        // axios를 통해서 전달받은 전체 데이터 가져오기
        // console.log(res);

        // axios를 통해서 전달받은 데이터를 전개 연산법을 통해서 key 값과 동일한 변수에 저장
        // const {config, data, headers, request, status, statusText} = res;

        // axios를 통해서 전달받은 전체 데이터 중 key값이 data인 부분만 가져와서 전개 연산법으로 변수에 대입
        const {boxOfficeResult} = res.data;
        // console.log(boxOfficeResult);

        // 변수 boxOfficeResult가 object 타입이므로 전개 연산법을 통해서 key명과 같은 변수에 데이터 대입
        const {boxofficeType, dailyBoxOfficeList, showRange} = boxOfficeResult;
        // console.log(boxofficeType);
        // console.log(dailyBoxOfficeList);
        // console.log(showRange);

        for (let i = 0; i < dailyBoxOfficeList.length; i++) {
          let boxOfficeList = "";
          boxOfficeList += "순위 : " + dailyBoxOfficeList[i].rank + "\n";
          boxOfficeList += "영화명 : " + dailyBoxOfficeList[i].movieNm + "\n";
          boxOfficeList += "개봉일 : " + dailyBoxOfficeList[i].openDt;
          console.log(boxOfficeList);
        }
        
      })
      .catch(err => {
        console.log('비동기 통신 중 오류가 발생했습니다.');
      });
  }

  return (
    <div className={'container mt-5'}>
      <button type={'button'} className={'btn btn-primary'} onClick={buttonClick}>클릭 시 데이터 가져오기</button>
    </div>
  );
}

export default AxiosTest;









