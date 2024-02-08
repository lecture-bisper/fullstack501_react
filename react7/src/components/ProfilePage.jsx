import React from 'react';

function ProfilePage(props) {
  return (
    <div>
      {/* 부모 컴포넌트에서 전달한 데이터를 props를 통해서 사용함 */}
      <h4>{props.user}</h4>
      <h4>{props.theme}</h4>
    </div>
  );
}

export default ProfilePage;









