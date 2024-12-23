import { Circle } from './Circle'
import styles from './index.module.scss'
import { Typography } from '../../components'

export const Input = () => {
  return (
    <div className={styles.inputCircle}>
      <Circle />
      <Typography>input</Typography>
    </div>
  )
}
