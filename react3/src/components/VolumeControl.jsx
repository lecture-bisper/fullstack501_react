import React, {useEffect, useState} from 'react';

function VolumeControl(props) {
  // state로 관리할 변수 volume 지정, 변수값 변경하는 함수 setVolume로 설정, 초기값은 0으로 설정
  const [volume, setVolume] = useState(0);

  // useEffect을 사용하여 volume의 기본값 5로 설정
  // useEffect의 의존성 배열을 빈배열로 사용하여 componentDidMount()로 사용
  useEffect(() => {
    setVolume(5);
  }, []);

  // useEffect의 의존성 배열에 state로 관리하는 volume 변수를 등록하여 componentDidUpdate()로 사용
  useEffect(() => {
    console.log(`볼륨이 ${volume}으로 변경되었습니다.`);
  }, [volume]);

  return (
    <div className={'border border-2 border-primary rounded-3 m-4 p-5 d-flex justify-content-center'}>
      <button type={'button'} className={'btn btn-success'} onClick={() => {
        // 삼항연산자를 사용하여 변경된 volume의 값이 0 미만이거나 10을 초과하지 못하게 막음
        (volume + 1) > 10 ? setVolume(10):setVolume(volume + 1);
      }}> + </button>
      <p><span className={'fs-3 mx-3'}>{volume}</span></p>
      <button type={'button'} className={'btn btn-info'} onClick={() => {
        (volume - 1) < 0 ? setVolume(0) : setVolume(volume - 1);
      }}> - </button>
    </div>
  );
}

export default VolumeControl;









