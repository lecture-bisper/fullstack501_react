import React from 'react';

// 다른 곳에서도 사용할 수 있도록 파일로 분리
const ThemeContext = React.createContext('dark');
ThemeContext.displayName = '테마컨텍스트';

export default ThemeContext;









