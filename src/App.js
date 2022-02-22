import './App.css';
import Nav from "./components/nav";
import Main from "./components/main";
import React from 'react';
import { Switch, Route, Navigate } from "react-router-dom";
import fireBase from './firebase'
import firebase from 'firebase/compat/app';
function App() {
  var checklogined=true
  // React.useEffect(()=>{
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (!user) {
  //       window.location.replace('/login');
  //     }else{
  //     }
  //   });
    
  // })
  return (
    <div id="wrapper">
    <Nav/>
    <Main/>
    </div>
  );
}

export default App;
