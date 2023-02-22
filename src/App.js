import React from 'react';
// import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
        <form>    
            <input
                className='inputAge'
                type="number"
                placeholder='Enter age...'
            />
            <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
