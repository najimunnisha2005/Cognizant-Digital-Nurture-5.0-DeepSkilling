import React, { useState } from "react";
import "./App.css";

function GuestGreeting() {
  return (
    <div>
      <h2>Welcome Guest</h2>

      <h3>Flight Details</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>₹4500</td>
          </tr>

          <tr>
            <td>6E202</td>
            <td>Chennai</td>
            <td>Bangalore</td>
            <td>₹2800</td>
          </tr>

          <tr>
            <td>UK303</td>
            <td>Mumbai</td>
            <td>Kolkata</td>
            <td>₹5200</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h3>Please Login to Book Tickets.</h3>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h2>Welcome User</h2>

      <h3>You can now book your flight ticket.</h3>

      <button>Book Ticket</button>
    </div>
  );
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Greeting(props) {

  if (props.isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogout} />;
  } else {
    button = <LoginButton onClick={handleLogin} />;
  }

  return (
    <div className="App">

      <h1>Ticket Booking App</h1>

      <Greeting isLoggedIn={isLoggedIn} />

      <br />

      {button}

    </div>
  );
}

export default App;