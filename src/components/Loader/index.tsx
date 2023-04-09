import { FC } from 'react'
import styles from './styles.module.css'

const Loader: FC = (): JSX.Element => {
  return <div className={styles.wrapper}>Loading...</div>
}

export default Loader
