import React, { useEffect, useRef } from 'react';
import { useForm } from './useForm.js';

function App() {
  const [values, handleChange] = useForm({ email: '', password: '' });
  const inputRef = useRef()

  return (
    <div>
      <input name='email' ref={inputRef} value={values.email} onChange={handleChange} />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={() => {
        inputRef.current.focus()
      }}>Focus</button>
    </div>
  );
}

export default App;
