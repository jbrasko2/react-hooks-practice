import React, { useEffect } from 'react';
import { useForm } from './useForm.js';

function App() {
  const [values, handleChange] = useForm({ email: '', password: '' });

  useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div>
      <input name='email' value={values.email} onChange={handleChange} />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
