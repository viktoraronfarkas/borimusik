import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";
import Links from "./routes/Links";

import instagram_logo from './assets/icons/instagram.svg';
import soundcloud_logo from './assets/icons/soundcloud.svg';
import spotify_logo from './assets/icons/spotify.svg';

import "nes.css/css/nes.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <nav class="">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/links" element={<Links />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      <footer>
        <div class="social">
          <ul>
            <li>
              <a href="https://open.spotify.com/artist/4o3bLvdMFH6MiBvdfrGVY2?si=s42N6ka8Q8OUtT0l_rUgsg">
                <img src={spotify_logo} alt="Spotify Logo" />
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/borimusik">
                <img src={soundcloud_logo} alt="Soundcloud Logo" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/borimusik/">
                <img src={instagram_logo} alt="Instagram Logo" />
              </a>
            </li>
          </ul>
        </div>

        <ul>
          <li>made by borimusik (Viktor Farkas) in 2022</li>
          <li>if you want a similar website, hit me up on <a href="https://www.instagram.com/borimusik/">Instagram</a> or via <a href="mailto:viktoraron.farkas@gmail.com">mail</a></li>
        </ul>
      </footer>
    </>
  );
}

export default App;
