import React from 'react';

function EX3ContactForm(props) {
  return (
    <form onSubmit={() => {
      alert('send message 버튼 클릭');
    }}>
      <div>
        <input type="text" className="form-control-plaintext mt-3 border-bottom py-3 px-2" placeholder="Name"/>
      </div>
      <div>
        <input type="number" className="form-control-plaintext mt-3 border-bottom py-3 px-2"
               placeholder="How many people"/>
      </div>
      <div>
        <input type="datetime-local" className="form-control-plaintext mt-3 border-bottom py-3 px-2"
               value={'2024-02-06 12:00:00'}/>
      </div>
      <div>
        <input type="text" className="form-control-plaintext mt-3 border-bottom py-3 px-2"
               placeholder="Message \ Special requirements"/>
      </div>
      <div>
        <button type={'submit'} className={'btn btn-secondary'}>SEND MESSAGE</button>
      </div>
    </form>
  );
}

export default EX3ContactForm;









