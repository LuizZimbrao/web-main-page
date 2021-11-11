import styles from './header.module.scss'

export default function Header() {
  return(
    <header className={styles.headerContainer}>
      <div>
        <img src="./img/Logo.png" alt="Logo"/>
      </div>

      <div>
        <img src="./img/Perfil.png" alt="Perfil"/>
      </div>
    </header>
  );
}