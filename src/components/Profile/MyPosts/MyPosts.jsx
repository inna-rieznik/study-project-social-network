import classes from './MyPosts.module.css';
import Post from './Posts/Post';





const My_posts = (props) => {

  //object with posts
  let posts = [
    {id:1, message:"Hey, How you doing?", likes:10},
    {id:2, message:"It's my first post!", likes:204},
    {id:3, message:"Nice to be there?", likes:10},
  ]

  //array of post objects 
  let postsData = posts.map( p => <Post message={p.message} likes={p.likes} /> )

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