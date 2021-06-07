
import classes from './Song.module.css';


const Song = (props) => {
    return (
      <div>
        <div>
          {props.songName}
        </div>
      </div>
    );
}

export default Song;