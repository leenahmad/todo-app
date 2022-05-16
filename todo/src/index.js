import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Header from './components/Header/Header';


function Main() {
  console.log('hi');
  return (
      <App />
  )

}
console.log('hi');
//const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main />
  </React.StrictMode>,
  document.getElementById('root'),
);