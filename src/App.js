import './App.css';
import MainLayout from './views/MainLayout'
import {CookiesProvider} from "react-cookie";

function App() {
  return (
      <CookiesProvider>
          <MainLayout/>
      </CookiesProvider>
  );
}

export default App;
