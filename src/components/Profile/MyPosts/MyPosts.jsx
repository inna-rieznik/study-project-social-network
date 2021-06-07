import classes from './MyPosts.module.css';
import Post from './Posts/Post';





const My_posts = () => {
  return (
    <div>
      <div>
         <h3> new post </h3>
          <div>
            <textarea></textarea>
          </div>
          <button>Add post</button>
      </div>
      <div className={classes.post}>
        <Post message="Hey, How you doing?" likes="10" />
        <Post message="It's my first post!" likes="20" />
        <Post />
      </div>
    </div>
  );
}

export default My_posts;