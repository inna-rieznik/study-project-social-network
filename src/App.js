import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Side_nav from './components/Navbar/Side-nav.jsx';
import App_content from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import {BrowserRouter, Route} from 'react-router-dom';




const App = (props) => { //created variable App

  
  
  return (  //стрелочная функция возвращает разметку
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Side_nav />
        <div className="app-wrapper-content">
          {/* <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={App_content} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music}/> */}

          <Route path='/dialogs' render={() => <Dialogs dialogs={props.appState.dialogsPage.dialogs} 
                                                        messages={props.appState.dialogsPage.messages} 
                                                        image={props.appState.dialogsPage.img}/>} />
          <Route path='/profile' render={() => <App_content posts={props.appState.profilePage.posts}/>} />
          <Route path='/news'render={() => <News/>} />
          <Route path='/music' render={() => <Music/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
