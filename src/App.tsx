import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { saveFavorites } from './utils/localStorage';

function App() {

  const favorites = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
        <AppRoutes />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
