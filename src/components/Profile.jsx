import classes from './Profile.module.css';



const App_content = () => {
    return (
        <div className={classes.profile}>
        <div >
          <img className={classes.image} src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"></img>
        </div>
        <div className={classes.avatar}>
          <img className={classes.avatar_photo} src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"></img>
        </div>
        <div>
          post
          <div>
              new post
          </div>
        </div>
        <div>
          posts
          <div className={classes.item}>post 1</div>
          <div className={classes.item}>post 2</div>
        </div>
      </div>
    );
}

export default App_content;