import React from 'react';
import EX2Sub from "./EX2Sub";

// https://www.w3schools.com/w3css/tryw3css_examples_pricing_tables.htm

const priceList = [
  {
    seq: 1,
    type: 'Basic',
    storage: '10GB',
    emails: 10,
    domains: 10,
    support: 'Endless',
    price: '$ 10',
    dark: true
  },
  {
    seq: 2,
    type: 'Pro',
    storage: '25GB',
    emails: 25,
    domains: 25,
    support: 'Endless',
    price: '$ 25',
    dark: false
  },
  {
    seq: 3,
    type: 'Premium',
    storage: '50GB',
    emails: 50,
    domains: 50,
    support: 'Endless',
    price: '$ 50',
    dark: true
  },
]

function EX2(props) {
  return (
    <div className={'container-fluid'}>
      <div className={'mb-3'}>
        <h2 className={'fw-normal'}>Responsive Pricing Tables</h2>
      </div>
      <div className={'row'}>
        {
          priceList.map(item => {
            return (
              <div className={'col-sm-4'}>
                <EX2Sub data={item} key={item.seq}/>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default EX2;









