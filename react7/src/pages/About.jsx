import React from 'react';
import {Link} from "react-router-dom";

function About(props) {
  return (
    <div>
      <h1>소개 페이지</h1>
      <p>리액트 라우터를 사용하여 About 으로 이동한 페이지</p>

      <Link to={'/'}>홈으로</Link>
    </div>
  );
}

export default About;









