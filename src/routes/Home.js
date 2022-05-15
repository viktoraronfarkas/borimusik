import React from "react";
import avatar from '../assets/img/avatar.jpg';

const Home = () => (
  <div className="home page">
    <img className="avatar" src={avatar} alt='Avatar'/>
    <div className="title">
      <h2>borimusik</h2>
      <p>Welcome to my page!</p>
    </div>
    <section className="radar section">
      <h2 className="item-title">release radar</h2>
      <div className='embedContainer'>
        <iframe
          title="underminer on Soundcloud"
          className="embedSong"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1265301964&color=%231a1a1a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
        <p>'underminer' on Soundcloud</p>
      </div>
      <div className='embedContainer'>
        <iframe
          title="🥺 on Soundcloud"
          className="embedSong"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1248705850&color=%231a1a1a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
        <p>'🥺' on Soundcloud</p>
      </div>
      <div className='embedContainer'>
        <iframe
          title="Lost in the warehouse on Soundcloud"
          className="embedSong"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1221324448&color=%231a1a1a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
        <p>'lost in the warehouse' on Soundcloud</p>
      </div>

      <div className='embedContainer'>
        <iframe
          title="Physical on Spotify"
          className="embedSong"
          src="https://open.spotify.com/embed/track/2lVfCOgs1vThuQH7f9e0JS?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
        <p>'physical' on Spotify</p>
      </div>

      <div className='embedContainer'>
        <iframe
          title="Expand / relax on Spotify"
          className="embedSong"
          src="https://open.spotify.com/embed/track/7aoeEnXp0adQCu2kiz5dB5?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
        <p>'expand / relax' on Spotify</p>
      </div>
    </section>

    <section className="section mixes">
      <h2 className="item-title">mixes from home</h2>
      <div className="embedContainer">
        <iframe
          title="mixes from home #01 - power up on Soundcloud"
          className="embedSong"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1268380525&color=%231a1a1a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
      </div>
    </section>

    <section className="section inspiration">
      <h2 className="item-title">where I get inspired from</h2>
      <div className="embedContainer">
        <iframe
          title="Hardtech / Gabber playlist on Spotify"
          className="embedPlaylist"
          src="https://open.spotify.com/embed/playlist/7ebWyU3C6ggfdADos7hmxv?utm_source=generator" width="100%"
          height="380" frameBorder="0" allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
      </div>
    </section>
  </div>
);



export default Home;