import { Box } from '../../components'
import styles from './index.module.scss'

export const CircleNode = () => {
  return (
    <Box
      stylesObject={{
        borderRadius: 'circle',
        border: 1,
        borderWidth: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className={styles.outerCircle}
    >
      <Box
        stylesObject={{
          borderRadius: 'circle',
          bgColor: 'primary-300',
        }}
        className={styles.innerCircle}
      ></Box>
    </Box>
  )
}
