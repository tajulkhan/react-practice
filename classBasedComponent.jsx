import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>;
};

export default Toggle;
