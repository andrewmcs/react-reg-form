import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="card formCard" >
      <form>

        <div className="form-group sm">
          <label for="firstName">First name</label>
          <input type="firstName" className="form-control" id="firstName" aria-describedby="firstNameHelp" placeholder="First Name"></input>
        </div>

        <div className="form-group">
          <label for="lastName">Last name</label>
          <input type="lastName" className="form-control" id="lastName" aria-describedby="lastNameHelp"
            placeholder="Last Name"></input>
        </div>

        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password"></input>
        </div>

        <div class="form-group">
          <label for="roleSelect">Role</label>
          <select class="form-control" id="roleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default App;
