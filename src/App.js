import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import {doc, setDoc, getDoc} from 'firebase/firestore'
import { AuthContext } from './contexts/AuthContext';
import {auth, firestore} from './firebaseConfig'
import Admin from './components/Admin/index';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {

  const { user, role } = useContext(AuthContext);


  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      const userRef = doc(firestore, 'users', user.uid)
      const docSnapShot = await getDoc(userRef);
      if (!docSnapShot.exists()) {
        await setDoc(userRef, {
          email: user.email,
          nombre: user.displayName,
          role: 'cliente'
        })
      }
    } catch (error) {
      console.log("Error al iniciar sesión con Google:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Home onSignIn={signInWithGoogle} onSignOut={handleSignOut} user={user} role={role} />} />
          <Route path="/admin" element={<Admin onSignIn={signInWithGoogle} onSignOut={handleSignOut} user={user} role={role} />} />
       
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
