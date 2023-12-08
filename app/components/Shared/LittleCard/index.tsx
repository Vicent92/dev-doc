import styles from './style.module.css'

export const LittleCard = () => {
    return (
        <div className={styles['container-item-documentacion']}>
            <div className={styles['icon-documentacion']}>

            </div>

            <div className={styles['name-documentacion']}>
                React
            </div>
        </div>
    )
}