
import './App.css';
import React, { useState} from 'react';
import LoginForm from './Components/LoginForm';


/* ang part na ito ang pinaka database ko mock data, gumawa ako ng function na maghohold ng data para sa checking ng login*/
function App() {
  const adminUser = {
    uname: "ronald26",
    password: "admin123",
    nameof:"Ronald Colata",
    section: "BSIT32E1",
    course: "Bachelor of Science in Information Technology",
    hobbies: "On free time i really go on a motorcycle ride.. not just a ride but a long ride..."
  }

  const [user, setUser] = useState({uname: "", password: ""});
  const [error, setError] = useState("");

  /* function for the if else statement*/
  const Login = details => 
  {
    console.log(details);
    
    if (details.uname == adminUser.uname && details.password == adminUser.password)
    {
      console.log("Logged In");
      setUser
      ({
        uname: details.uname,
        password: details.password
      });

    } 
    
    /*if mali ung nilagay na login details this code will run*/
    else 
    {
      console.log("Details do not match");
      setError( <div className="error">Paki lagay ng tamang FANS ID</div>);
    }    
  } 
    
  /*upon logout*/
    const Logout = () => {
      setUser({ uname: "", password: ""});
    }
  
    /*if tama this will run, this will set data sa mga sa function na adminUser*/
    return (
      <div className="App">
        {(user.uname != "") ? (
          

          <div className="welcome">

            <div className="top">Welcome to my Fans Club :-)</div>

            
            <div className="una">
              <h3>NAME</h3>
              <h2>{adminUser.nameof}</h2>
            </div>

            <div className="dalawa">
              <h3>SECTION</h3> 
              <span>{adminUser.section}</span>
            </div>

            <div className="tatlo">
              <h3>COURSE</h3> 
              <span>{adminUser.course}</span>
            </div>

            <div className="apat">
              <h3>HOBBIES</h3> 
              <span>{adminUser.hobbies}</span>
            </div>

            <div className="pindot">
              <button onClick={Logout}>LOGOUT</button>
            </div>
           

          </div>
          
          ) : (
            <LoginForm Login={Login} error={error} />

            
          )}
      </div>
    );
  }

export default App
