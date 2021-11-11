import Link from './Link/index';
import { links } from './links'

import styles from './sidebar.module.scss';

export default function Sidebar() {
  return(
    <div className={styles.sidebarContainer}>
      {links.map((item, index) => (
        <Link key={index} image={item.image} link={item.link}/>
      ))}
    </div>
  );
}