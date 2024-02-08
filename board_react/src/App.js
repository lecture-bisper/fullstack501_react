import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "./components/layout/ErrorPage";
import Layout from "./components/layout/Layout";
import SelectBoardList from "./components/board/SelectBoardList";
import InsertBoard from "./components/board/InsertBoard";
import SelectBoard from "./components/board/SelectBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Outlet /> : 중첩 Route 사용 시 부모 Route의 url을 자신의 url로 사용하는 index 옵션을 사용 했을 경우 index와 연동되어 있는 자식 컴포넌트를 출력해주는 컴포넌트 */}
        <Route path={'/'} element={<Layout />}>
          <Route index element={<SelectBoardList />} />
          <Route path={'write'} element={<InsertBoard />} />
          <Route path={'board/:boardIdx'} element={<SelectBoard />} />
          <Route path={'*'} element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
