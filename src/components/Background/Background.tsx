import { Box, BoxProps } from '../Box'
import styles from './index.module.scss'
import { joinClassNames } from '../../utils'

export interface BackgroundProps extends BoxProps {}

export const Background = (props: BackgroundProps) => {
  const { className, ...other } = props

  return (
    <Box
      className={joinClassNames(className, styles.dotedBackground)}
      {...other}
    />
  )
}
