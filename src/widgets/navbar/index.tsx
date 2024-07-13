import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <h3>React-Tips</h3>

      <nav>
        <a>Docs</a>
        <a>Examples</a>
      </nav>
    </div>
  );
};

export default Navbar;
