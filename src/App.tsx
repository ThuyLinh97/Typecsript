import React from 'react';
import './App.css';

interface StateForm {
  name: string;
  age: number;
  bioDes: string;
}

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
      <form className='form'>
        <input placeholder='name' name='name'></input><br /><br/>
        <input placeholder='age' name='age'></input><br/><br/>
        <input placeholder='bio decription' name='bioDes'></input><br/><br/>
        <button className='submit' type="submit">Submit</button>
      </form>
     
    </div>
  );
}

export default App;
