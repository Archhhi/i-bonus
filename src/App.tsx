import { FC, useEffect, useState } from 'react'
import styles from './app.module.css'
import BonusCard from './components/BonusCard'
import { ReactComponent as InfoIcon } from './assets/icons/info.svg'
import Api from './services/api'
import { ClientDataType } from './types'
import Loader from './components/Loader'

const App: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [clientData, setClientData] = useState<ClientDataType | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const { accessToken } = await Api.createToken()
        const { data } = await Api.getClientData(accessToken)

        data && setClientData(data)
        setIsLoading(false)
      } catch (error: any) {
        setErrorMessage(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <span className={styles.logo}>ЛОГОТИП</span>
            <InfoIcon className={styles.infoIcon} />
          </div>
        </header>
        <div className={styles.headerBottom}></div>
        {isLoading && <Loader />}
        {clientData ? <BonusCard data={clientData} /> : errorMessage}
      </div>
    </div>
  )
}

export default App
