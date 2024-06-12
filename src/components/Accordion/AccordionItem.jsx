import React from 'react';

const AccordionItem = ({ id, title, info, toogleAccordion, isActive }) => {
  const handleClick = () => {
    toogleAccordion(id);
  }
  return (
    <div className='accordion-item'>
      <div className="title-container">
        <div className='accordion-title'>{title}</div>
        <button className='openCloseBtn' onClick={handleClick}>+</button>
      </div>
      <div className={`accordion-info ${isActive ? 'open' : null}`}>{info }</div>
    </div>
  );
};

export default AccordionItem;
