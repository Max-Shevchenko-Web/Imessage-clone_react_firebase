import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Imessage from './components/Imessage/Imessage';
import Login from './components/Login/Login';
import { auth } from 'firebase';

import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth().onAuthStateChanged((authUser) => {
      if(authUser) {
        // user is login
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }));
      } else {
        // user is logout
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? <Imessage /> : <Login />}
    </div>
  );
}

export default App;


// 2:48:35