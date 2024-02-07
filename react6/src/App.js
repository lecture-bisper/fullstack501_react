import React from "react";
import AxiosTest from "./components/AxiosTest";
import AxiosDailyBoxOffice from "./components/AxiosDailyBoxOffice";
import AxiosRestApiServer from "./components/AxiosRestApiServer";

function App() {
  return (
    <div className="App">
      <h3>Axios로 비동기 통신하기</h3>
      <AxiosTest/>
      <br/><br/>

      <AxiosDailyBoxOffice/>
      <br/><br/>

      <AxiosRestApiServer/>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
