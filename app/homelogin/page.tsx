import Link from 'next/link'
import styles from './page.module.css'

const data = [
    {
        image: '',
        title: 'Documentacion',
        description: 'Todas las documentaciones oficiales de lenguajes de programacion y frameworks'
    },
    {
        image: '',
        title: 'Creadores de contenido dev',
        description: 'Lista de todos los creadores de contenido referente a la programcion y la tegnologia'
    },
    {
        image: '',
        title: 'Iconos',
        description: 'Todas las funtes de donde puedes utilizar variedad de iconos para tus proyectos'
    },
    {
        image: '',
        title: 'Imagenes',
        description: 'Varios bancos de imagenes gratuitas'
    },
]

const HomeLogin = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['container-items']}>
            {
                data.map((el, i) => {
                    const titleLink = el.title.toLowerCase()
                    return (
                        <Link href={`homelogin/${titleLink}`}>
                            <div key={i} className={styles['items']}>
                                <div className={styles['img']}>{el.image}</div>

                                <div className={styles['text-container']}>
                                    <h4 className={styles['title']}>{el.title}</h4>

                                    <p className={styles['description']}>{el.description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }        
            </div>
        </div>
        
    )
}

export default HomeLogin