import React, { useState, useMemo } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // When the component rerenders, useMemo looks at the depenency to see if it has changed,
  // If it hasn't, it does not run slowFunction
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

// slowFunction runs every time state changes because the whole component is rerendered.
function slowFunction(num) {
  console.log('Calling Slow Function');
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
