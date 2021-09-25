import Sidebar from './components/sidebar/Sidebar';
import './styles/scss/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import Header from './components/header/Header';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    setTimeout(() => document.body.removeAttribute('class'), 1000);
  }, []);

  return (
    <Router>
      <Header />
      <div className='sidebar-bg bg-primary'> </div>
      <Sidebar />
      <AppRouter />
    </Router>
  );
}

export default App;
