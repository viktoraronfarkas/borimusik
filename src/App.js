import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import countapi from 'countapi-js';

import About from "./routes/About";
import Home from "./routes/Home";
import Links from "./routes/Links";

import instagram_logo from './assets/icons/instagram.svg';
import soundcloud_logo from './assets/icons/soundcloud.svg';
import spotify_logo from './assets/icons/spotify.svg';

import "nes.css/css/nes.min.css";
import "./App.css";

const App = () => {
  //Visitor count from 4th March, 2022
  countapi.visits('global').then((result) => {
    //subtract test visits
    console.log('Visitor count: ' + result.value - 11);
  });

  return (
    <>
      <div>
        <nav className="">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <footer>
        <div className="social">
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
