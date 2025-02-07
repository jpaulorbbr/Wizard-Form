import { useState } from 'react';

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div className='container'>
        <h1>React Wizard Form</h1>
        <p>Step {currentStep} </p>
        <form>
          <Step1 />
          <Step2 />
          <Step3 />
        </form>
      </div>
    );
}

function Step1() {
  return (
    <div className='form-group'>
      <label htmlFor='email'>Email address</label>
      <input
        className='form-control'
        id='email'
        name='email'
        type='text'
        placeholder='Enter email'
      />
    </div>
  );
}

function Step2() {
  return (
    <div className='form-group'>
      <label htmlFor='username'>Username</label>
      <input
        className='form-control'
        id='username'
        name='username'
        type='text'
        placeholder='Enter username'
      />
    </div>
  );
}

function Step3() {
  return (
    <div className='form-group'>
      <label htmlFor='password'>Password</label>
      <input
        className='form-control'
        id='password'
        name='password'
        type='password'
        placeholder='Enter password'
        value={props.password}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default App;

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/