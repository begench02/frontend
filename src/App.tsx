import { useSelector } from 'react-redux';
// Components
import { Auth } from './pages/Auth/Auth';
import { Main } from './pages/Main/Main';
// Store
import { AppStateType } from './redux/store';
// Styles
import './App.css';


export const App = () => {
  let isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  
  return (
    <div className="App">
      {isAuth
        ? <Main />
        : <Auth />
      }
    </div>
  );
}