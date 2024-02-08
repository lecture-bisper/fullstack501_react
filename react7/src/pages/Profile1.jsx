import React from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

function Profile1(props) {
  // useLocation() 훅 사용 시 서버 url 뒤에 있는 모든 문자열을 그대로 가져옴
  // pathname : 해당 컴포넌트의 url을 가져옴
  // search : ? 기호 뒤에 있는 모든 쿼리스트링을 가져옴
  // 사용자가 직접 search 의 내용을 파싱을 통해서 데이터를 가져와야함
  const profile = useLocation();

  console.log(`useLocation()으로 가져온 데이터`);
  // console.log(profile);

  const {pathname, search} = profile;
  console.log(search);
  let data = search.substring(1);
  data = data.split('&');
  console.log(data);
  const splitData1 = data[0].split('=');
  const splitData2 = data[1].split('=');


  // useSearchParams() 훅을 사용 시 파라미터값을 자동으로 가져옴
  // 가져온 데이터를 출력하려면 get(파라미터명) 을 사용하여 출력
  const [params, setParams] = useSearchParams();
  console.log('----- useSearchParams()로 가져온 데이터-----');
  console.log(params);
  console.log(params.get('param1'));
  console.log(params.get('param2'));

  return (
    <div>
      <h1>Profile1 페이지</h1>
      <p>쿼리 스트링을 통해서 데이터를 가져오는 페이지</p>
      <hr/>
      <h4>useLocation() 사용 파라미터 1 : {splitData1[1]}</h4>
      <h4>useLocation() 사용 파라미터 2 : {splitData2[1]}</h4>
      <hr/>
      <h4>useSearchParams() 사용 파라미터 1 : {params.get('param1')}</h4>
      <h4>useSearchParams() 사용 파라미터 2 : {params.get('param2')}</h4>
    </div>
  );
}

export default Profile1;









