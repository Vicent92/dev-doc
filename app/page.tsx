import Image from 'next/image'
import styles from './page.module.css'
import { GitHub } from './components/icons/github'
import { Twitter } from './components/icons/twitter'
import Link from 'next/link'

export default function Home() {
  return (
   <main className={styles.main}>
      <h1 className={styles['title-top']}>
        Recursos <span className={styles['span-title-top']}>Dev</span>
      </h1>

      <h1 className={styles['title-bottom']}>
        En un solo lugar
      </h1>

      <Link href='/homelogin'>
        <button className={styles['button-inicial']}>
          Entrar
        </button>
      </Link>
    </main>
  )
}
