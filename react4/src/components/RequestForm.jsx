import React, {useState} from 'react';

function RequestForm(props) {
  const [value, setValue] = useState('요청사항을 입력하세요');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = e => {
    alert(`입력한 요청사항 : ${value}`);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={'my-3'}>
          <label for={'comment'} className={'form-label'}>요청사항 : </label>
          {/* 기본 html의 textarea는 value 속성이 없기 때문에 textarea 의 시작 태그와 끝 태그 사이에 데이터를 입력함 */}
          {/* jsx 문법에서의 textarea는 value 속성을 사용할 수 있음 */}
          <textarea rows={5} className={'form-control'} value={value} onChange={handleChange} placeholder={'요청사항을 입력하세요'}></textarea>
          {/*<textarea rows={5} className={'form-control'} onChange={handleChange}>{value}</textarea>*/}
        </div>
        <div className={'my-3 d-grid gap-2'}>
          <button type={'submit'} className={'btn btn-primary'}>확인</button>
          <button type={'reset'} className={'btn btn-secondary'}>취소</button>
        </div>
      </form>
    </div>
  );
}

export default RequestForm;









