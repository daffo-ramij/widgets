import React, { useState } from 'react';
import Accordion from './component/Accordion';
import Search from './component/Search';
import Dropdown from './component/Dropdown';
import Translate from './component/Translate';
import Route from './component/Route';
import Header from './component/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a fornt end javascripts framnework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React ?',
    content: 'You use React by creating component',
  },
];

const options = [
  { lebel: 'The color Red', value: 'Red' },
  { lebel: 'The color Green', value: 'Green' },
  { lebel: 'The color Purple', value: 'Purple' },
  { lebel: 'The color Yellow', value: 'Yellow' },
];

/**11111 */

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />;
//   }
// };

// const showList = () => {
//   if (window.location.pathname === '/search') {
//     return <Search />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }
// };

export default () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showTrogoler, setShowTrogoler] = useState(true);

  return (
    // <div>
    //   {/* <Accordion items={items} /> */}
    //   {/* <Search /> */}
    //   <button onClick={() => setShowTrogoler(!showTrogoler)}>
    //     Trogle Dropdown
    //   </button>

    //   {showTrogoler ? (
    //     <Dropdown
    //       selectedP={selected}
    //       onSelectedChange={setSelected}
    //       options={options}
    //     />
    //   ) : null}
    // </div>

    <div>
      {/**11111 */}
      {/* <Translate /> */}
      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()} */}

      <Header />
      <Route path={'/'}>
        <Accordion items={items} />
      </Route>
      <Route path={'/search'}>
        <Search />
      </Route>
      <Route path={'/dropdown'}>
        <Dropdown
          lebel="Select Item"
          options={options}
          selectedP={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path={'/translate'}>
        <Translate />
      </Route>
    </div>
  );
};
