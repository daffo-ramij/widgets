import React, { useState } from 'react';
import Accordion from './component/Accordion';
import Search from './component/Search';
import Dropdown from './component/Dropdown';
import Translate from './component/Translate';

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

export default () => {
  // const [selected, setSelected] = useState(options[0]);
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
      <Translate />
    </div>
  );
};
