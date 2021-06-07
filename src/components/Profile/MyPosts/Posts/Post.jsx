import classes from './Post.module.css';



const Post = (props) => {
  return (
    <div className={classes.item}>
      <div>
        <img className={classes.avatar_photo} src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"></img>
      </div>
      <div>{props.message}</div>
      <div>
        <span>Likes {props.likes}</span>
      </div>
    </div>
  );
}

export default Post;