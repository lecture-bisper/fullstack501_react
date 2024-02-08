import React from 'react';

// Context 2개 생성
const ThemeContext = React.createContext("light");
ThemeContext.displayName = '테마컨텍스트';
const UserContext = React.createContext("Guest");
UserContext.displayName = '사용자컨텍스트';

function App4(props) {
  const theme = 'primary';
  const signedInUser = '아이유';

  return (
    // 컨텍스트 2개를 겹쳐서 사용, 2개의 데이터를 자손 컴포넌트에 전달 가능
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        {/* 자식 컴포넌트 호출, 데이터를 넘기는 것이 없음 */}
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout(props) {
  return (
    <div>
      {/* 자식 컴포넌트 호출, 데이터 전달 없음*/}
      <Content />
    </div>
  )
}

function Content(props) {
  return (
    <div>
      {/* Consumer를 호출하여 데이터 가져오기*/}
      {/* Provider를 겹쳐서 사용했으므로 Consumer로 겹쳐서 사용 가능 */}
      {/* Consumer로 데이터 가져올 때 매개변수의 이름을 value가 아닌 다른 값으로 변경할 수 있음*/}
      <ThemeContext.Consumer>
        {theme => (
          // 콜백함수 안에서 Consumer를 다시 호출하여 데이터 가져오기
          <UserContext.Consumer>
            {user => (
              // 컨텍스트에 저장된 데이터를 자식 컴포넌트의 props에 전달
              <ProfilePage user={user} theme={theme} />
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}

function ProfilePage(props) {
  return(
    <div>
      {/*props를 통해서 전달된 데이터 출력 */}
      <h4>{props.user}</h4>
      <h4>{props.theme}</h4>
    </div>
  )
}

export default App4;









