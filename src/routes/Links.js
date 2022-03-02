import React from "react";
import { Link } from 'react-router-dom';

const Links = () => (
  <div>
    <h2>Here are some awesome links</h2>
    <Link to="https://soundcloud.com/borimusik">Soundcloud</Link>
    <iframe
      src="https://open.spotify.com/embed/playlist/7ebWyU3C6ggfdADos7hmxv?utm_source=generator" width="100%"
      height="380" frameBorder="0" allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
    </iframe>
  </div>
);

export default Links;