import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
  {
    lebel: 'Hindi',
    value: 'hi',
  },
  {
    lebel: 'Afrikaans',
    value: 'af',
  },
  {
    lebel: 'Arabic',
    value: 'ar',
  },
  {
    lebel: 'Japanese',
    value: 'ja',
  },
  {
    lebel: 'German',
    value: 'de',
  },
  {
    lebel: 'Gujarati',
    value: 'gu',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>

      <Dropdown
        lebel="Select a language"
        selectedP={language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <hr />
      <div className="ui header">Output </div>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
