import Counter from "./components/Counter";
import SetStateClass from "./components/SetStateClass";
import SetStateFunction from "./components/SetStateFunction";
import Parent from "./components/Parent";
import NotificationList from "./components/NotificationList";
import Events from "./components/Events";

// state : 자바스크립트의 object 타입 변수, 현재 컴포넌트의 상태 정보 저장하는 역할

function App() {
  return (<div className="container">
    <Counter/>

    <hr/>

    <h3>클래스 컴포넌트에서 state 사용하기</h3>
    <SetStateClass/>
    <br/>

    <h3>함수 컴포넌트에서 state 사용하기</h3>
    <SetStateFunction/>

    <br/>
    <hr/>
    <br/>

    <h3>props와 state의 차이</h3>
    <Parent/>

    <br/>
    <hr/>
    <br/>

    <h3>컴포넌트 생명주기</h3>
    <NotificationList/>

    <hr />

    <h3>이벤트 사용하기</h3>
    <Events />

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>);
}

export default App;
