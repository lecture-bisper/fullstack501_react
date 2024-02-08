import React from 'react';

// 다른 곳에서도 사용할 수 있도록 파일로 분리
const UserContext = React.createContext('Guest');
UserContext.displayName = '유저컨텍스트';

export default UserContext;









