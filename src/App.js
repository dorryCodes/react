import './App.css';
import './components/Employee';
import Employee from './components/Employee';
import { useState } from 'react';
function App() {
  const showemployees =true;
 const [task, setTask] =useState('dev');
  return (
    <div className="App">
        {showemployees ?(
          <>
          <input type='text' onChange={(e)=>{
            console.log(e.target.value);
            setTask(e.target.value);
          }}/>
            <Employee name ="Dorry" role='intern' />;
            <Employee name="Caleb" role={task}/>
          </>
         ):(
          <p>You cannot access the employee details</p>
       )};
    </div>
  );
}

export default App;
