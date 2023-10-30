
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ onSignIn, onSignOut, user, role }) {

  console.log(role)
  const navigate = useNavigate();

    useEffect(() => {
    if (role === "admin") {
      navigate('/admin');
    }
  }, [role, navigate]);

  return (
    <div>
      Home<br/>
      {
        user ? (
          <button onClick={onSignOut}>Sign Out</button>
        ) : (
          <button onClick={onSignIn}>Sign In with Google</button>
        )
      }
    </div>
  );
}

export default Home