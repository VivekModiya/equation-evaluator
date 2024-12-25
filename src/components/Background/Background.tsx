import { Box, BoxProps } from '../Box'
import styles from './index.module.scss'
import { joinClassNames } from '../../utils'

export interface BackgroundProps extends BoxProps {}

export const Background = (props: BackgroundProps) => {
  const { className, stylesObject, ...other } = props

  return (
    // @ts-ignore
    <Box
      {...other}
      className={joinClassNames(className, styles.dotedBackground)}
    />
  )
}
