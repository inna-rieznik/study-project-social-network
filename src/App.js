import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Side_nav from './components/Side-nav';
import App_content from './components/Profile';




const App = () => { //created variable App
  return (  //стрелочная функция возвращает разметку
    <div className="app-wrapper">
      <Header />
      <Side_nav />
      <App_content />
     </div>
  );
}



export default App;
