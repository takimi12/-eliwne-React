import React, { useState } from 'react';
import FotoTab from "../../static/ProductPage/ProductPageAccordion/AkordeonSchemat.png";
import Arrow from "../../static/ProductPage/ProductPageAccordion/Arrows.png";


const SubAccordionItem = ({ title, length }) => {
  return (
    <div className="sub-accordion-item">
      <h3>{title}</h3>
      <p>{length}</p>
    </div>
  );
};

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className={`accordion-item ${isActive ? 'active' : ''}`}>
      <h2 className="accordion-header">
        <button
          className="accordion-button h6-600-third"
          type="button"
          onClick={onClick}
        >
          {title}
          <img src={Arrow} alt="Arrow" />
        </button>
      </h2>
      {isActive && (
        <div className="accordion-body">
          {content.map((subItem, index) => (
            <SubAccordionItem
              key={index}
              title={subItem.title}
              length={subItem.length}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className='details-accordion'>
        <div className="accordion">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isActive={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
        <div className='accordion-photo'>
          <img src={FotoTab} alt="Accordion Photo" />
        </div>
      </div>
    </>
  );
};

const BasicExample = () => {
  const accordionItems = [
    {
      title: 'Na wejściu',
      content: [
        {
          title: 'A - Wymiary sekcji noga',
          length: '640mm',
        },
        {
          title: 'B - Wymiary sekcji głowica',
          length: '500mm',
        },
        // Dodaj pozostałe podsekcje dla "Na wejściu"
      ],
    },
    {
      title: 'Na wyjściu',
      content: [
        {
          title: 'A - Wymiary sekcji noga',
          length: '640mm',
        },
        {
          title: 'B - Wymiary sekcji głowica',
          length: '500mm',
        },
        // Dodaj pozostałe podsekcje dla "Na wyjściu"
      ],
    },
    {
      title: 'Objętość wewnętrzna',
      content: [
        {
          title: 'A - Wymiary sekcji noga',
          length: '640mm',
        },
        {
          title: 'B - Wymiary sekcji głowica',
          length: '500mm',
        },
        // Dodaj pozostałe podsekcje dla "Objętość wewnętrzna"
      ],
    },
    {
      title: 'Rodzaj materiału',
      content: [
        {
          title: 'A - Wymiary sekcji noga',
          length: '640mm',
        },
        {
          title: 'B - Wymiary sekcji głowica',
          length: '500mm',
        },
        // Dodaj pozostałe podsekcje dla "Rodzaj materiału"
      ],
    },
  ];

  return (
    <Accordion items={accordionItems} />
  );
};

export default BasicExample;
