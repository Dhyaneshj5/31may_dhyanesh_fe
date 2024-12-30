import React, { useState } from 'react';

const LoginLogoutButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);  // Toggle login state
  };

  return (
    <div>
      <button className='btn btn-primary' onClick={handleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default LoginLogoutButton;
