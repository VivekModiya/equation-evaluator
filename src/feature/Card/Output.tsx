import { Circle } from './Circle'
import styles from './index.module.scss'
import { Typography } from '../../components'

export const Output = () => {
  return (
    <div className={styles.outputCircle}>
      <Typography>output</Typography>
      <Circle />
    </div>
  )
}
