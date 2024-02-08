import React from 'react';

// Context API : 리액트는 기본적으로 단방향으로 데이터를 전달함
// 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달
// 조상 컴포넌트에서 아래에 있는 타겟 컴포넌트로 데이터 전달 시 props를 사용하여 타겟 컴포넌트가 있는 중간 컴포넌트 들을 통해서 데이터를 전달하게 됨
// 조상 컴포넌트와 타겟 컴포넌트 사이의 모든 컴포넌트는 사용하지 않는 props 데이터를 가지고 있어야 함
// 조상 컴포넌트와 타겟 컴포넌트 간의 거리가 멀면 멀수록 관리가 어렵기 때문에 전역 변수로 사용할 수 있는 Context 를 생성하여 데이터를 저장하고 필요한 부분에서 해당 Context와 데이터를 호출하여 한번에 전달함


// React.createContext(기본값) : Context API를 사용하기 위해 Context 를 생성하는 메소드, 기본값 설정 가능
// Provider를 사용하지 않았을 경우 createContext()를 통해 설정된 기본값을 Consumer가 사용함
// 초기값으로 undefined 사용 시 기본값을 사용할 수 없음
// 사용법 : 
// const Context변수명 = React.createContext(기본값)

// Context.Provider : createContext()를 통하여 생성된 Context에 원하는 데이터를 설정
// value 속성에 전달하고자 하는 데이터를 입력
// value 속성은 필수
// 사용법 :
// <MyContext.Provider value={전달할값} >

// Context.Cunsumer : Context.Provider를 통해서 저장된 데이터를 가져옴
// provider에서 value 속성에 저장한 값을 가져옴, 속성명은 value로 고정
// 사용법 :
// <MyContext.Consumer>
//    {value => 출력할 컴포넌트 }
// </MyContext.Consumer>

// Context.displayName : 개발자 도구에서 확인할 때 사용하는 이름 설정
// Context는 여러개를 중복으로 사용할 수 있기 때문에 개발자 도구에서 사용자가 쉽게 확인할 수 있도록 함

// Context API를 사용하여 Context를 생성, 기본값으로 success 설정
const ThemeContext = React.createContext('success');
ThemeContext.displayName = 'MyContext';

function App3(props) {
  return (
    <div className={'container mt-4'}>
      {/* Provider 를 사용하여 전달할 데이터를 저장함 */}
      {/* Provider에서 사용하는 value 속성명은 고정 */}
      {/* Provider 하나에 데이터 1개 저장, 동시에 여러개의 데이터를 저장하려면 배열이나 object 타입 사용 */}
      {/* Provider 는 여러개 중복하여 사용할 수 있음 */}
      <ThemeContext.Provider value={'info'}>
        <Toolbar2 />
      </ThemeContext.Provider>
    </div>
  );
}

function Toolbar2(props) {
  // 부모 컴포넌트에서 전달받은 데이터 없음
  return <ThemeButton2 />
}

function ThemeButton2(props) {
  // 부모 컴포넌트에서 전달받은 데이터 없음
  return (
    // Consumer : Provider를 통해서 Context에 저장된 내용을 불러옴
    // 콜백 함수로 동작하며, 매개변수로 Provider에서 저장한 value를 사용함
    <ThemeContext.Consumer>
      {value => <Button theme={value} /> }
    </ThemeContext.Consumer>
  )
}

function Button(props) {
  // Consumer에서 전달받은 데이터를 props를 통해서 사용함
  return <button type={'button'} className={`btn btn-${props.theme}`}>{props.theme} 테마 버튼</button>
}

export default App3;









