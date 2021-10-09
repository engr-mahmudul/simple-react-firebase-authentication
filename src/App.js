import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import logo from './logo.svg';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialization';
import { useState } from "react";
// Authentication Initilize
initializeAuthentication()
//Log in procedure start
const provider = new GoogleAuthProvider();


function App() {
  const [user,setUser] = useState({})
  const signInHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, photoURL ,email} = result.user;
        const logedInUsers ={
          name:displayName,
          photo:photoURL,
          email: email
        }
        setUser(logedInUsers)

      })
  }
  return (
    <div className='custom'>
      <div>
        <button onClick={signInHandler}>Button click</button>
      </div>
      <div>

        {
          
            user.email && <div> 
              <img src={user.photo} alt="" />
              <h2>{user.name}</h2>
              <h4>{user.email}</h4>
            </div>

        }

      </div>
    </div>
  );
}

export default App;
