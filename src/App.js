import React from 'react';
import Accordion from './component/Accordion';

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

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
