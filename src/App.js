import React from 'react';
import './App.css';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Navbar from  './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileContainer from './Components/Profile/ProfileContainer';
import LoginPage from '../src/Components/Login/Login';

const App = (props) =>  {


  return (<BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer/>
     <Navbar/>
      <div className='app-wrapper-content'>
      <Routes>
      
      <Route path="profile/:userId"
       element = {<ProfileContainer />}/>
      <Route path="dialogs/*" 
      element = {<DialogsContainer />}/>
      <Route path="users/*"
       element = {<UsersContainer />}/>
       <Route path="login/*"
       element = {<LoginPage />}/>
      {/* <Route path="news/*" element = {<News/>}/>
      <Route path="music/*" element = {<Music/>}/>
      <Route path="settings/*" element = {<Settings/>}/> */}
      </Routes>
      </div>
     
    </div>
    </BrowserRouter> )
}

export default App;
