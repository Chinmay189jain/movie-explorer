import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link to="/">🏠 Home</Link>
        <Link to="/favorites">⭐ Favorites</Link>
      </div>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
};

export default Navbar;