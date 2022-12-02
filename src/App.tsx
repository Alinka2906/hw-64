import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./components/Home/Home";
import './App.css';
import AddForm from "./components/AddForm/AddForm";
import {EnterPosts} from "../type";
import Post from "./components/Posts/Posts";
import Posts from "./components/Posts/Posts";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";

function App() {
  const [posts, setPosts] = useState<EnterPosts[]>([]);

  const addPosts = (newPosts:EnterPosts) => {
    setPosts(prev => [...prev, newPosts]);
  };


  return (
    <div className="App">
        <header>
          <NavBar/>
        </header>
      <Routes>
        <Route path="/" element={(
          <Home/>
        )}></Route>
        <Route path="/add" element={(
          <AddForm onSubmit={addPosts}/>
        )}></Route>
        <Route path="/about" element={(
          <About/>
        )}></Route>
        <Route path="/contacts" element={(
          <Contacts/>
        )}></Route>
      </Routes>
    </div>
  );
}

export default App;
