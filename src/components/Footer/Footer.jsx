import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>&copy; 2026 React Clone. Crafted for product-driven teams.</p>
        <nav className={styles.links} aria-label="Footer navigation">
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <a href="#company">Company</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
