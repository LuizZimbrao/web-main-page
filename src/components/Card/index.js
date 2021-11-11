import styles from './card.module.scss'

export default function Card({ height, width, title }) {
  return(
    <div
      className={styles.cardContainer}
      style={{ height: height, width: width}}>
      { title }
    </div>
  );
}