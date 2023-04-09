import { FC } from 'react'
import styles from './styles.module.css'
import { ReactComponent as FireIcon } from '../../assets/icons/fire.svg'
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg'
import { ClientDataType } from '../../types'

type BonusCardPropTypes = {
  data: ClientDataType
}

const BonusCard: FC<BonusCardPropTypes> = ({ data }): JSX.Element => {
  const { forBurningQuantity, currentQuantity, dateBurning, typeBonusName } =
    data

  const formattedDate = new Date(dateBurning).toLocaleDateString('ru', {
    day: 'numeric',
    month: 'numeric'
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.bonusInfo}>
        <span className={styles.bonusAmount}>{currentQuantity} бонусов</span>
        <div className={styles.dateInfo}>
          <span className={styles.dateInfoItem}>{formattedDate} сгорит</span>
          <FireIcon className={styles.fireIcon} />
          <span className={styles.dateInfoItem}>
            {forBurningQuantity} бонусов
          </span>
        </div>
      </div>
      <button className={styles.nextButton}>
        <ArrowRightIcon className={styles.arrowRightIcon} />
      </button>
    </div>
  )
}

export default BonusCard
