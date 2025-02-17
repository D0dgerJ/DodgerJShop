import React, { useState } from 'react';

const Details = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`has-child ${isOpen ? 'expand' : ''}`}>
      <a href="#0" className="icon-small" onClick={handleToggle}>
        Details
      </a>
      <div className={`content ${isOpen ? 'expand' : ''}`}>
        <p>{product.description}</p>
      </div>
    </li>
  );
};

export default React.memo(Details);
