
import classes from './Music.module.css';
import Song from './Song/Song';




const Music = (props) => {
    return (
      <div>
        <div>My favorite songs are:</div>
        <Song songName="City Of Angels" />
        <Song songName="City Of Angels" />
        <Song songName="City Of Angels" />
      </div>
    );
}

export default Music;