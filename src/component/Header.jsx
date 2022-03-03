import React from 'react';
import Linkk from './Linkk';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Linkk className="item" href="/">
        Accordion
      </Linkk>
      <Linkk className="item" href="/search">
        Search
      </Linkk>
      <Linkk className="item" href="/dropdown">
        Dropdown
      </Linkk>
      <Linkk className="item" href="/translate">
        Translate
      </Linkk>
    </div>
  );
};

export default Header;
