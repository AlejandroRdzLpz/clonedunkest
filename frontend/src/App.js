import NavBar from './components/NavBar';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Routes from './Routes.js'
import { AuthContextProvider } from './context/AuthContext.js'

function App() {
  return (
    <div>
      <Router>
        <AuthContextProvider>
          <NavBar />
          <Routes />
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
