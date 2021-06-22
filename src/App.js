import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Side_nav from './components/Navbar/Side-nav.jsx';
import App_content from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import {BrowserRouter, Route} from 'react-router-dom';
import { addPostSt } from './redux/state';




const App = (props) => { //created variable App

  
  
  return (  //стрелочная функция возвращает разметку
    <BrowserRouter>
    
      <div className="app-wrapper">
        <Header />
        <Side_nav />
        <div className="app-wrapper-content">
      
          <Route path='/dialogs' 
                 render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} 
                                        messages={props.state.dialogsPage.messages} 
                                        updateNewMessageText={props.updateNewMessageText}
                                        addMessageSt={props.addMessageSt}
                                        newMessageText={props.state.dialogsPage.newMessageText}/>} />

          <Route path='/profile' 
                 render={() => <App_content posts={props.state.profilePage.posts }
                                            newPostText={props.state.profilePage.newPostText}
                                            updateNewPostText={props.updateNewPostText}
                                            addPostSt={props.addPostSt}/>} />

          <Route path='/news'render={() => <News/>} />
          <Route path='/music' render={() => <Music/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
