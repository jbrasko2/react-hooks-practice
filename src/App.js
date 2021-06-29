import React, {useEffect} from 'react';
import { useForm } from './useForm.js'

function App() {
  const [values, handleChange] = useForm({ email: '', password: '' });

  useEffect(() => {
    console.log('render')
  }, [values.password])

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
