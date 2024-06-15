import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Appbar from './components/Appbar';
import Profile from './components/Profile';
import Entry from './components/Entry';
import Placement from './components/Placement';
import Error from './components/Error';
import Home from './components/Home';
function App({ store }) {
  return (
    <Router>
      <div className="App">
        <div className="App-body">
          <Appbar store={store} />
          <Routes>
            <Route path="/login" element={<Login store={store} />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/profile" element={localStorage.getItem("role") === "1" ? <Profile /> : <Error />} />
            <Route path="/entry" element={localStorage.getItem("role") === "1" ? <Entry /> : <Error />} />
            <Route path="/placement" element={(localStorage.getItem("role") === "1" || localStorage.getItem("role") === "2") ? <Placement /> : <Error />} />
            <Route path="*" element={<Error />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
