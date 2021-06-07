
import classes from './NewsItem.module.css';




const NewsItem = (props) => {
    return (
      <div>
        <p>{props.article}</p>
      </div>
    );
}

export default NewsItem;