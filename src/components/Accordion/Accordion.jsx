import { useState, useCallback } from 'react';
import AccordionItem from './AccordionItem';
import data from './data';
import './AccordionItem.css';

const Accordion = () => {
  const [multipleOpen, setMultipleOpen] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(new Set());

  const toogleAccordion = useCallback(
    (id) => {
      setActiveAccordion((prev) => {
        const updateActiveAccordion = new Set(prev);
        if (updateActiveAccordion.has(id)) {
          updateActiveAccordion.delete(id);
        } else {
          if (!multipleOpen) {
            updateActiveAccordion.clear();
          }
          updateActiveAccordion.add(id);
        }
        return updateActiveAccordion;
      });
    },
    [setActiveAccordion, activeAccordion, multipleOpen]
  );

  return (
    <div className="app-container">
      <div className="checkbox-container">
        <lable htmlFor="chekBoxMultipleOpen">
          Allow multiple Accordion open
        </lable>
        <input
          id="chekBoxMultipleOpen"
          type="checkbox"
          checked={multipleOpen}
          onChange={() => setMultipleOpen((prev) => !prev)}
        />
      </div>
      <div className="accordion-container">
        {data.map((ele) => (
          <AccordionItem
            key={ele.id}
            id={ele.id}
            title={ele.title}
            info={ele.info}
            toogleAccordion={toogleAccordion}
            isActive={activeAccordion.has(ele.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
