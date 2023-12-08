import { YouTube } from '../../Icons/YouTube'
import styles from './style.module.css'

export const CardAllInfo = () => {
    return (
        <div className={styles['items']}>
            <div className={styles['img']}></div>

            <div className={styles['text-container']}>
                <h4 className={styles['title']}>Midu dev</h4>

                <p className={styles['description']}>Creador de contenido españos, que su tema principal es el desarrollo web</p>

                <div className={styles['container-icon']}>
                    <YouTube/> <span>Midu-dev</span>
                </div>
            </div>
        </div>
    )
}