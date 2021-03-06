import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';





const My_posts = (props) => {

  //array of post objects which we passed to postData array

  let postsData = props.posts.map( p => <Post message={p.message} likes={p.likes} /> )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPostSt(); 
  } 

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div>
         <h3> new post </h3>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
          <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.post}>
        {postsData}
      </div>
    </div>
  );
}

export default My_posts;