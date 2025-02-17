import React, { useState } from 'react';

const Custom = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`has-child ${isOpen ? 'expand' : ''}`}>
      <a href="#0" className="icon-small" onClick={handleToggle}>
        Custom
      </a>
      <div className={`content ${isOpen ? 'expand' : ''}`}>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Bust <span className="mini-text">(cm)</span></th>
              <th>Waist <span className="mini-text">(cm)</span></th>
              <th>Hip <span className="mini-text">(cm)</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XS</td>
              <td>82,5</td>
              <td>62</td>
              <td>87,5</td>
            </tr>
            <tr>
              <td>S</td>
              <td>85</td>
              <td>63,5</td>
              <td>89</td>
            </tr>
            <tr>
              <td>M</td>
              <td>87,5</td>
              <td>67,5</td>
              <td>93</td>
            </tr>
            <tr>
              <td>L</td>
              <td>90</td>
              <td>72,5</td>
              <td>98</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>93</td>
              <td>77.5</td>
              <td>103</td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  );
};

export default React.memo(Custom);
