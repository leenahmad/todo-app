import React from 'react';

import ToDo from './components/classComponents/todo/todo';
import SettingsContext from './components/context/settingsContext';
import Header from './components/classComponents/Header';

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css"; 

export default class App extends React.Component {
  render() {
    return (
        <>
         <SettingsContext>
      <ToDo />
         </SettingsContext>
         </>
    );
  }
}