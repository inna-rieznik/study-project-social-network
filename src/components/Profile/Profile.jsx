import My_posts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import Post from './MyPosts/Posts/Post';




const App_content = (props) => {
  

    return (
      <div>
        <div >
          <img className={classes.image} src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"></img>
        </div>
        <My_posts posts={props.posts} 
                  addPostSt={props.addPostSt} 
                  newPostText={props.newPostText}
                  updateNewPostText={props.updateNewPostText}/>
      </div>
    );
}

export default App_content;