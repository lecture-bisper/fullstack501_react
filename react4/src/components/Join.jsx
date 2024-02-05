// 문제 1) 회원 가입 페이지를 작성하세요
// id, 비밀번호, 이름, email, 휴대전화, 성별 정보를 입력받고 확인 버튼 클릭 시 console.log 나 alert 로 결과를 출력하는 리액트 컴포넌트를 작성하세요
// id : userId, 비밀번호 : userPw, 이름 : userName, email : userEmail, 휴대전화 : userPhone, 성별 : userGender
// 컴포넌트명 : Join

import React, {useState} from "react";

function Join(props) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userGender, setUserGender] = useState('남자');

  const handleSubmit = e => {
    const message = `User ID : ${userId}
User PW : ${userPw}
User Name : ${userName}
User Email : ${userEmail}
User Phone : ${userPhone}
User Gender : ${userGender}`;

    console.log(message);
    alert(message);

    e.preventDefault();
  }

  const handleUserId = e => setUserId(e.target.value);
  const handleUserPw = e => setUserPw(e.target.value);
  const handleUserName = e => setUserName(e.target.value);
  const handleUserEmail = e => setUserEmail(e.target.value);
  const handleUserPhone = e => setUserPhone(e.target.value);
  const handleUserGender = e => setUserGender(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto border border-3 border-primary rounded-3 p-3'}>
          <div className={'my-3'}>
            {/* jsx 문법 사용 중 label 태그의 for 속성을 htmlFor 속성으로 사용함 */}
            <label htmlFor={'user-id'} className={'form-label'}>USER ID : </label>
            <input type={'text'} className={'form-control'} id={'user-id'} value={userId} onChange={handleUserId}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-pw'} className={'form-label'}>USER PW : </label>
            <input type={'password'} className={'form-control'} id={'user-pw'} value={userPw} onChange={handleUserPw}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-name'} className={'form-label'}>USER NAME : </label>
            <input type={'text'} className={'form-control'} id={'user-name'} value={userName} onChange={handleUserName}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-email'} className={'form-label'}>USER EMAIL : </label>
            <input type={'email'} className={'form-control'} id={'user-email'} value={userEmail} onChange={handleUserEmail}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-phone'} className={'form-label'}>USER PHONE : </label>
            <input type={'text'} className={'form-control'} id={'user-phone'} value={userPhone} onChange={handleUserPhone}/>
          </div>
          <div className={'my-3'}>
            <label htmlFor={'user-gender'} className={'form-label'}>USER GENDER : </label>
            <input type={'text'} className={'form-control'} id={'user-gender'} value={userGender} onChange={handleUserGender}/>
          </div>
          <div className={'d-grid gap-2'}>
            <button type={"submit"} className={'btn btn-primary'}>회원 가입</button>
            <button type={'reset'} className={'btn btn-secondary'}>취소</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Join;









