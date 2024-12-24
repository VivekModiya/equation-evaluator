import { Circle } from './Circle'
import styles from './index.module.scss'
import { Typography } from '../../components'

export const Input = () => {
  return (
    <div className={styles.input}>
      <Circle />
      <Typography>input</Typography>
    </div>
  )
}
