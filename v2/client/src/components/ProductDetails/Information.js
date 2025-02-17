import React, { useState } from 'react';

const Information = ({ product }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`has-child ${isOpen ? 'expand' : ''}`}>
      <a href="#0" className="icon-small" onClick={handleToggle}>
        Information
      </a>
      <ul className={`content ${isOpen ? 'expand' : ''}`}>
        <li>
          <span>Brands</span> <span>{product.brand}</span>
        </li>
        <li>
          <span>Activity</span> <span>Running</span>
        </li>
        <li>
          <span>Material</span> <span>{product.material}</span>
        </li>
        <li>
          <span>Gender</span> <span>{product.gender}</span>
        </li>
      </ul>
    </li>
  );
};

export default React.memo(Information);
