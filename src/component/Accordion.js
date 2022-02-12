import React, { useState } from 'react';

//1 class Accordion extends React.Component{
//.helper method
// onTitleClicked=()=>{
//     console.log('clicled', index);
// }
// render(){}
// }

const Accordion = ({ items }) => {
  //* Array distructuring for initialize state
  const [activeIndex, setActiveState] = useState(null);

  const onTitleClicked = (index) => {
    setActiveState(index);
  };

  const renderdList = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div
          // Strign Tempalting
          className={`title ${active}`}
          // 1. class based componet hole emne hba
          // onClick={() => console.log('clicked', index)}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderdList}</div>;
};

export default Accordion;
