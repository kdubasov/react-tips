import styles from './MenuFeedback.module.css';

const MenuFeedback = () => {
  return (
    <header className={styles.wrapper}>
      <small>
        Any suggestions? Always ready to answer your questions:{' '}
        <a href="https://t.me/kdubasov" rel="noreferrer" target="_blank">
          @kdubasov
        </a>
      </small>
    </header>
  );
};

export default MenuFeedback;
