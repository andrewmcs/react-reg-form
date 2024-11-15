import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>First Name <sup>*</sup></label>
            <input placeholder="First Name"></input>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
