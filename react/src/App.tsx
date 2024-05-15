import { Outlet } from 'react-router';
import './App.css';
import CookiesQuestion from './prefabs/CookiesQuestion';

function App() {
  return (
    <div>
      <Outlet />
      <CookiesQuestion />
    </div>
  );
}
export default App;