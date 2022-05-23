import React from 'react';

import ToDo from './components/classComponents/todo/todo';
import SettingsContext from './components/context/settingsContext';
import Login from './components/context/login';

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css"; 

export default class App extends React.Component {
  render() {
    return (
      <>
      <SettingsContext>
        <Login>
          <div id='main'>
            <ToDo />
          </div>
        </Login>
      </SettingsContext>
    </>
    );
  }
}