import './App.css';
import { useState } from 'react';

// A compenent specifically to show a password error message 
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  )
}



function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // this gives us a password object that we can control the values of 
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  // setting a default value in useState here
  const [role, setRole] = useState("role");

  return (
    <div className="App">
      <div className="card formCard" >
        <form>

          <div className="form-group sm">
            <label for="firstName">First name</label>
            <input value={firstName} type="firstName" className="form-control" id="firstName" aria-describedby="firstNameHelp" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value); }}></input>
          </div>

          <div className="form-group">
            <label for="lastName">Last name</label>
            <input value={lastName} type="lastName" className="form-control" id="lastName" aria-describedby="lastNameHelp"
              placeholder="Last Name" onChange={(e) => { setLastName(e.target.value); }}></input>
          </div>

          <div className="form-group">
            <label for="email">Email address</label>
            <input value={email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value); }}></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label for="password">Password</label>
            <input value={password.value} type="password" className="form-control"
              id="password" placeholder="Password"
              onChange={(e) => setPassword({ ...password, value: e.target.value })}
              onBlur={(e) => setPassword({ ...password, isTouched: true })}>
            </input>
            {/* conditionally render an error message when the password has been touched and is too short. */}
            {
              password.isTouched && password.value.length < 8
                ? (<PasswordErrorMessage />)
                : null
            }
          </div>

          <div class="form-group">
            <label for="role">Role</label>
            <select value={role} class="form-control" id="role" onChange={(e) => { setRole(e.target.value); }}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary submitButton">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default App;
