import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">🏠 Home</Link>
      <Link to="/favorites">⭐ Favorites</Link>
    </nav>
  );
};

export default Navbar;