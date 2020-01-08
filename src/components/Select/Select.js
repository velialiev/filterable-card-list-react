import React from 'react';

const Select = ({ emptyValue, options = [], value, onChange }) => {
  return (
    <select className="input" onInput={onChange}>
      <option value={''}>{emptyValue}</option>
      {
        options.map(option =>
          <option value={option}
                  key={option}>
            {option}
          </option>)
      }
    </select>
  );
};

export default Select;
