import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import logo from './logo.svg';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialization';
// Authentication Initilize
initializeAuthentication()
//Log in procedure start
const provider = new GoogleAuthProvider();
const signInHandler = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user)
    })
}

function App() {
  return (
    <div className="App">
      <button onClick={signInHandler}>Button click</button>
    </div>
  );
}

export default App;
