import { GitHub } from '../icons/github'
import { Twitter } from '../icons/twitter'
import styles from './style.module.css'

export const Header = () => {
    return (
    <header className={styles['header-inicial']}>
      <div className={styles['container-by']}>
        By Vicente Millan
      </div>

      <div className={styles['container-icons']}>
        <GitHub/>
        <Twitter/>
      </div>
    </header>
    )
}