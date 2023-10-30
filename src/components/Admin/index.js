
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutSuperAdmin from '../Admin/LayoutSuperAdmin';

function Admin({ onSignIn, onSignOut, user, role }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "admin") {
      navigate('/');
    }
  }, [role, navigate]);

  console.log(user)


  return (
    <LayoutSuperAdmin onSignOut={onSignOut} onSignIn ={onSignIn} role={role} user={user} />
    
  )
}

export default Admin