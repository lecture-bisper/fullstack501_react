import React from "react";
import Exercise from "./component/Exercise";
import Parent from "./component/Parent";
import Parent2 from "./component/Parent2";
import Join from "./component/Join";

function App() {
  return (
    <div className="App mt-5">
      <h2>클론 코딩으로 UI만들기</h2>

      <br/><br/>

      <Exercise />

      <br/><hr/><br/>

      <h3>상태 공유하기</h3>
      <Parent />

      <br/><br/>

      <Parent2 />

      <br/><br/>

      <Join />


      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
