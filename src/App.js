import './App.css';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home'
import Courses from './pages/Courses'
import Register from './pages/Register';
import { Container } from 'react-bootstrap';
import Login from './pages/Login';


function App() {
  return (
    <>
      <AppNavbar />
      <Container>
        <Login />
      </Container>
    </>
  );
}

export default App;
