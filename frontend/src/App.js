import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Chatbot from './components/chat/Chatbot';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Chatbot} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Routes>
    </Router>
  );
};

export default App;