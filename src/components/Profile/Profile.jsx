import My_posts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import Post from './MyPosts/Posts/Post';




const App_content = (props) => {
  
  // let posts = [
  //   {id:1, message:"Hey, How you doing?", likes:10},
  //   {id:2, message:"It's my first post!", likes:204},
  //   {id:3, message:"Nice to be there?", likes:10},
  // ]

    return (
      <div>
        <div >
          <img className={classes.image} src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"></img>
        </div>
        <My_posts posts={props.posts} />
      </div>
    );
}

export default App_content;