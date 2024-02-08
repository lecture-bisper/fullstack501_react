import React from 'react';
// 파일로 분리해 놓은 Context를 import 해서 사용함
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";
import Layout from "./components/Layout";

function App5(props) {

  // Provider로 전달할 데이터 선언
  const theme = 'primary';
  const signedInUser = '아이유';

  return (
    // import한 Context를 사용하여 Provider를 실행
    // Provider를 통해서 Context에 데이터를 저장함
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        {/* 자식 컴포넌트 호출, 데이터는 전달하지 않음 */}
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App5;









