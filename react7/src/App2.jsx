import React from 'react';

// 리액트에서 최종 컴포넌트로 데이터를 전달 시 중간에 있는 모든 컴포넌트를 통해서 데이터를 전달해야 함
// 중간에 있는 컴포넌트들은 사용하지 않는 속성을 받아서 자식 컴포넌트에서 그대로 전달
// 시작점
function App2(props) {
  return (
    <div className={'container mt-4'}>
      {/* 자식 컴포넌트 Toolbar 호출, theme 라는 이름으로 데이터 문자열 'dark'를 전달 */}
      <Toolbar theme={'info'}/>
    </div>
  );
}

function Toolbar(props) {
  // 자식 컴포넌트 ThemeButton 호출, theme 라는 이름으로 데이터 'dark' 를 전달
  return <ThemeButton theme={props.theme} />
}

function ThemeButton(props) {
  // 자식 컴포넌트 Button 호출, theme 라는 이름으로 데이터 'dark' 를 전달
  return <Button theme={props.theme}/>
}

function Button(props) {
  const clickButton = () => alert(`사용한 테마 : ${props.theme}`);

  // button 태그 화면에 출력, 부모 컴포넌트에서 전달받은 데이터 theme 를 사용
  return <button type={'button'} className={`btn btn-${props.theme}`} onClick={clickButton}>{props.theme} 테마 버튼</button>
}

export default App2;









