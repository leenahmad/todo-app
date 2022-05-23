import { useContext } from 'react';
import { LoginContext } from '../context/login';
import { When } from 'react-if';
import { Button } from '@blueprintjs/core';
import Login from '../classComponents/login';
export default function Header() {
  const protect = useContext(LoginContext);
  return (
    <>
      <div id='header'>
        <header id='site-header'>
        </header>
        <Login />
        <When condition={protect.isLoggedin}>
          <div id='user-info'>
            <span>Username : {protect.userInfo.username}</span>
            <span>Role: {protect.userInfo.role}</span>
          </div>
          <Button intent='danger' onClick={(e) => protect.logout()}>
            Logout
          </Button>
        </When>
      </div>
    </>
  );
}