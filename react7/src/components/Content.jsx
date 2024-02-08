// useContext() 훅을 사용하기 위해 import
import React, {useContext} from 'react';
// 파일로 분리해 놓은 Context를 import 하여 사용
import ThemeContext from "../contexts/ThemeContext";
import UserContext from "../contexts/UserContext";
import ProfilePage from "./ProfilePage";

function Content(props) {
  // Provider를 통해서 저장된 데이터를 가져오기 위해서 useContext() 훅을 사용함
  // 각각의 Context에 저장된 내용을 useContext()로 가져와서 변수에 저장
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    // 자식 컴포넌트 호출, useContext()로 가져온 데이터를 props를 통해서 전달
    <ProfilePage theme={theme} user={user} />
  );
}

export default Content;









