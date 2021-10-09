import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import logo from './logo.svg';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialization';
import { useState } from "react";
// Authentication Initilize
initializeAuthentication()
//Log in procedure start
const googelProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({})
  const signInGoogleHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, googelProvider)
      .then(result => {
        const { displayName, photoURL, email } = result.user;
        const logedInUsers = {
          name: displayName,
          photo: photoURL,
          email: email
        }
        setUser(logedInUsers)

      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
  }
  const signInGithubHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const { displayName, photoURL } = result.user;
        const logedInUsers = {
          name: displayName,
          photo: photoURL
        }
        setUser(logedInUsers);

      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
  }
  const signOutHandler = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser({});
    })

  }
  return (
    <div className='custom'>
      <div>
       { !user.name? <div>
          <button onClick={signInGoogleHandler}>Google SignIn</button>
          <button onClick={signInGithubHandler}>Github SignIn</button>
        </div> :
        <div>
          <button onClick={signOutHandler}>Sign Out</button>
        </div>}
      </div>
      <div>

        {

          user.name && <div>
            <div className='smalldiv'>
              <img src={user.photo} alt="" />
            </div>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
          </div>

        }

      </div>
    </div>
  );
}

export default App;
