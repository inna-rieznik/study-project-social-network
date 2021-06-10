import classes from './MyPosts.module.css';
import Post from './Posts/Post';





const My_posts = (props) => {

  //array of post objects which we passed to postData array

  let postsData = props.posts.map( p => <Post message={p.message} likes={p.likes} /> )

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
        {postsData}
      </div>
    </div>
  );
}

export default My_posts;