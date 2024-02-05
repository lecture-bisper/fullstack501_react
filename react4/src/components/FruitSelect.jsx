import React, {useState} from 'react';

function FruitSelect(props) {
  // select에 multiple 미사용 시
  // const [value, setValue] = useState('');
  // select에 multiple 사용 시
  const selectList = ['apple', 'peach', 'grape', 'banana', 'watermelon'];
  const [value, setValue] = useState([]);

  // select 에 multiple 미사용 시 이벤트 처리 함수
  const handleChange = e => setValue(e.target.value);

  // select 에 multiple 사용 시 이벤트 처리 함수
  const handleChangeMultiple = e => {
    // e.target.selectedOptions 선택된 목록을 다 가져옴, options 라는 변수에 대입
    const options = [...e.target.selectedOptions];
    // 배열 options를 map을 통해서 option 태그의 value 속성값을 하나씩 출력
    const values = options.map(item => item.value)
    // setState()로 state로 관리받고 있는 변수 value 값을 수정
    setValue(values);
  }

  const handleSubmit = e => {
    alert(`선택한 과일 : ${value}`);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={'my-3'}>
          <label for={'fruitSelect'} className={'form-label'}>과일을 선택하세요 : </label>
          {/* multiple 옵션 미사용 시 select 문 */}
          {/*<select id={'fruitSelect'} className={'form-control'} value={value} onChange={handleChange}>*/}
          {/*  <option value={'apple'}>사과</option>*/}
          {/*  <option value={'peach'}>복숭아</option>*/}
          {/*  <option value={'grape'}>포도</option>*/}
          {/*  <option value={'banana'}>바나나</option>*/}
          {/*  <option value={'watermelon'}>수박</option>*/}
          {/*</select>*/}

          {/* multiple 옵션 사용 시 select 문 */}
          <select id={'fruitSelect'} className={'form-control'} value={value} onChange={handleChangeMultiple} multiple={true}>
            {selectList.map( (item, index) =>
              <option value={item} key={index}>{item}</option>
            )}
          </select>
        </div>
        <div className={'my-3'}>
          <button type={'submit'} className={'btn btn-primary'}>확인</button>
        </div>
      </form>
    </div>
  );
}

export default FruitSelect;









