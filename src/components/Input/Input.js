import React from 'react';

const Input = ({ ...nativeInputProps }) => {
  return (
    <input className="input"
           {...nativeInputProps} />
  );
};

export default Input;
