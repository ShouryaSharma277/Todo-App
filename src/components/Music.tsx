import Iframe from "react-iframe";
import "../scss/music.scss";

export const Music = () => {
  return (
    <div>
      <div className="h1 text-center my-3">Music</div>
      <div className="spotify-embed text-light">
        <Iframe
          className="songs"
          url="https://open.spotify.com/embed/playlist/6B1gjdNP4EqaWqnemacYu9?theme=0"
          allow="encrypted-media"
          position="relative"
        />
      </div>
    </div>
  );
};
