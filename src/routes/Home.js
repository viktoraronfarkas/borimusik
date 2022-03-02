import React from "react";
import avatar from '../assets/img/avatar.jpg';

const Home = () => (
  <div class="home page">
    <img class="avatar" src={avatar} alt='Profile picture'/>
    <div class="title">
      <h2>borimusik</h2>
      <p>Welcome to my page!</p>
    </div>
    <h2 class="item-title">release radar</h2>
    <div class='embedContainer'>
      <iframe
        class="embedSong"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1221324448&color=%231a1a1a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
      <p>'lost in the warehouse' on Soundcloud</p>
    </div>

    <div class='embedContainer'>
      <iframe
        class="embedSong"
        src="https://open.spotify.com/embed/track/2lVfCOgs1vThuQH7f9e0JS?utm_source=generator"
        width="100%"
        height="80"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
      </iframe>
      <p>'physical' on Spotify</p>
    </div>
  </div>
);



export default Home;