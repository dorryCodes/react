import './App.css';
import './components/Employee';
import Employee from './components/Employee';
function App() {
  const showemployees =true;
  return (
    <div className="App">
        {showemployees ?(
          <>
            <Employee/>
          </>
         ):(
          <p>You cannot access the employee details</p>
       )};
    </div>
  );
}

export default App;
