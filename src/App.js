import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import styles from './styles/app.module.scss'
import './styles/globals.scss'

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Dashboard/>
        </main>
      </div>
    </div>
  );
}

export default App;
