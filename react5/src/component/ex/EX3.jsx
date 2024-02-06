import React from 'react';
import EX3Navigate from "./EX3Navigate";
import EX3Footer from "./EX3Footer";
import EX3Contact from "./EX3Contact";
import EX3About from "./EX3About";
import EX3Menu from "./EX3Menu";

// https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm

function EX3(props) {
  return (
    <div>
      <EX3Navigate />
      <header className={'d-flex justify-content-center'}>
        <div className={'position-relative'}>
          <img src={'https://www.w3schools.com/w3images/hamburger.jpg'} className={'mw-100'}/>
          <div className={'position-absolute'} style={{top: '89%', left: '2%'}}>
            <h1>Le Catering</h1>
          </div>
        </div>
      </header>
      <main className={'container'}>
        <EX3About />
        <hr/>
        <EX3Menu />
        <hr/>
        <EX3Contact />
      </main>
      <EX3Footer />
    </div>
  );
}

export default EX3;

// <div>
//   <nav className={'navbar navbar-expand-sm navbar-light bg-white fixed-top shadow-sm'}>
//     <a className={'navbar-brand'}>Gourmet au Catering</a>
//     <ul className="navbar-nav ms-auto">
//       <li className="nav-item">
//         <a className="nav-link" href="#">About</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Menu</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Contact</a>
//       </li>
//     </ul>
//   </nav>
//   <header className={'d-flex justify-content-center'}>
//     <div className={'position-relative'}>
//       <img src={'https://www.w3schools.com/w3images/hamburger.jpg'} className={'mw-100'}/>
//       <div className={'position-absolute'} style={{top: '89%', left: '2%'}}>
//         <h1>Le Catering</h1>
//       </div>
//     </div>
//   </header>
//   <main className={'container'}>
//     <div className={'row my-5'}>
//       <div className={'col-sm px-3 d-flex justify-content-start'}>
//         <img className={'mw-100'} src={'https://www.w3schools.com/w3images/tablesetting2.jpg'}/>
//       </div>
//       <div className={'col-sm px-3'}>
//         <h1>About Catering</h1>
//         <br/>
//         <h5>Tradition since 1889</h5>
//         <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit
//           consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//           iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use
//           seasonal ingredients.</p>
//         <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
//           consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//       </div>
//     </div>
//     <hr/>
//     <div className={'row my-5'}>
//       <div className={'col-sm px-3'}>
//         <h1>Our Menu</h1>
//         <br/>
//         <h4>Bread Basket</h4>
//         <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
//         <br/>
//         <h4>Honey Almond Granola with Fruits</h4>
//         <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
//         <br/>
//         <h4>Belgian Waffle</h4>
//         <p>Vanilla flavored batter with malted flour 7.50</p>
//         <br/>
//         <h4>Scrambled eggs</h4>
//         <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
//         <br/>
//         <h4>Blueberry Pancakes</h4>
//         <p>With syrup, butter and lots of berries 8.50</p>
//       </div>
//       <div className={'col-sm px-3 d-flex justify-content-end'}>
//         <img className={'mw-100'} src={'https://www.w3schools.com/w3images/tablesetting.jpg'}/>
//       </div>
//     </div>
//     <hr/>
//     <div className={'row my-5'}>
//       <h1>Contact</h1>
//       <br/>
//       <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the
//         food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
//       <p>Catering Service, 42nd Living St, 43043 New York, NY</p>
//       <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message
//         here:</p>
//       <form>
//         <div>
//           <input type="text" className="form-control-plaintext mt-3 border-bottom py-3 px-2" placeholder="Name"/>
//         </div>
//         <div>
//           <input type="number" className="form-control-plaintext mt-3 border-bottom py-3 px-2"
//                  placeholder="How many people"/>
//         </div>
//         <div>
//           <input type="datetime-local" className="form-control-plaintext mt-3 border-bottom py-3 px-2"
//                  value={'2024-02-06 12:00:00'}/>
//         </div>
//         <div>
//           <input type="text" className="form-control-plaintext mt-3 border-bottom py-3 px-2"
//                  placeholder="Message \ Special requirements"/>
//         </div>
//       </form>
//     </div>
//   </main>
//   <footer className={'bg-secondary-subtle p-5'}>
//     <p className={'lead text-dark text-center'}>made by fullstack 501</p>
//   </footer>
// </div>









