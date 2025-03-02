import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import RightBar from './components/RightBar';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import config from "./config";
console.log(config.BASE_URL);

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
      <RightBar />
        <NewsFeed />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;