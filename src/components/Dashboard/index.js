import Card from '../Card'

import styles from './dashboard.module.scss'

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <h2>Dashboard</h2>
      
      <div className={styles.boxesContainer}>
        <div className={styles.leftSide}>
          <Card height="50%" title="Resumo Financeiro do Mês"/>
          <div className={styles.bottomBoxesContainer}>
            <Card height="100%" width="33%" title="Mais Vendidos"/>
            <Card height="100%" width="33%" title="Mais Rentaveis"/>
            <Card height="100%" width="33%" title="Estoque Baixo"/>
          </div>
        </div>
        <Card width="30%" title="Últimas Atualizações"/>
      </div>
    </div>
  );
}