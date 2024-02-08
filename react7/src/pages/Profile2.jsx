import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

function Profile2(props) {
  // useParams() 훅을 사용하여 파라미터로 전달된 데이터를 모두 가져옴
  // 데이터 사용 시 '변수명.파라미터명' 으로 데이터 접근 가능
  const profile = useParams();
  console.log(profile);

  // useNavigate() 훅 사용 시 소스 코드로 원하는 페이지 이동이 가능함
  // useNavigate를 저장한 변수의 매개변수로 음수 값을 입력 시 이전 페이지로 이동
  // useNavigate를 저장한 변수의 매개변수로 양수 값을 입력 시 앞으로 페이지로 이동
  // useNavigate를 저장한 변수의 매개변수로 url을 입력 시 지정한 페이지로 이동
  const navi = useNavigate();

  const goPrev = () => {
    navi(-1);
  }

  const goNext = () => {
    navi(1);
  }

  const goAbout = () => {
    navi('/about');
  }
  
  return (
    <div>
      <h1>Profile2 페이지</h1>
      <p>URL 파라미터 방식으로 데이터를 가져오는 페이지</p>
      <hr/>
      <h4>useParams() 사용 파라미터 1 : {profile.username}</h4>
      <h4>useParams() 사용 파라미터 2 : {profile.age}</h4>

      <button type={'button'} className={'btn btn-primary me-2'} onClick={goPrev}>뒤로 가기</button>
      <button type={'button'} className={'btn btn-primary me-2'} onClick={goNext}>앞으로 가기</button>
      <button type={'button'} className={'btn btn-primary'} onClick={goAbout}>about으로 가기</button>
    </div>
  );
}

export default Profile2;









