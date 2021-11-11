import styles from './link.module.scss';

export default function Link({ image, link }) {
  return(
    <div className={styles.linkContainer}>
      <div className={styles.iconContainer}>
        <img src={image} alt={link} />
      </div>

      <p>{link}</p>
    </div>
  );
}