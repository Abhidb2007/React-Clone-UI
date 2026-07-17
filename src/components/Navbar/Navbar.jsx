import styles from './Navbar.module.css';
import { navLinks } from '../../utils/content';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo} aria-hidden="true">
          R
        </span>
        <span className={styles.title}>React Clone</span>
      </div>
      <nav className={styles.navigation} aria-label="Primary navigation">
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className={styles.navLink}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.ctaButton} type="button">
        Try it free
      </button>
    </header>
  );
}

export default Navbar;
