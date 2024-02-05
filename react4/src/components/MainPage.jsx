import React, {useState} from 'react';
import WarningBanner from "./WarningBanner";

// 부모 컴포넌트
function MainPage(props) {
  // 변수 showWarning을 state로 선언하여 상태 관리, 초기값 false
  const [showWarning, setShowWarning] = useState(false);

  // 이벤트 처리 함수
  const handleToggleClick = () => {
    // setShowWarning 함수를 실행하여 state로 관리되는 showWarning 의 값을 변경
    setShowWarning((prevShowWarning) => !prevShowWarning);
  }

  return (
    <div>
      {/* 자식 컴포넌트 호출, 현재 showWarning의 값을 warning라는 이름으로 데이터를 전달 */}
      <WarningBanner warning={showWarning} />
      <button type={'button'} className={'btn btn-primary'} onClick={handleToggleClick}>
        {/*현재 showWarning 의 값에 따라 텍스트 변경*/}
        {showWarning ? "감추기" : "보이기"}
      </button>
    </div>
  );
}

export default MainPage;









