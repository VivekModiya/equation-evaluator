import { stylesFunction, StylesFunctionProps } from '../../tokens'
import { joinClassNames } from '../../utils'
import { Box } from '../Box'
import styles from './index.module.scss'

export interface PaperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  elevation?: boolean
  borderRadius?: 2 | 4 | 8 | 12 | 16
  className?: string
  children?: React.ReactNode
  stylesObject?: StylesFunctionProps
}

export const Paper = (props: PaperProps) => {
  const {
    borderRadius = 16,
    elevation = true,
    className,
    children,
    stylesObject,
    ...other
  } = props

  const rootClassName = joinClassNames(
    stylesFunction({
      border: 1,
      borderRadius: 16,
      borderColor: 'neutral-300',
      ...stylesObject,
    }),
    className,
    elevation ? styles.elevation : ''
  )

  return (
    <Box className={rootClassName} {...other}>
      {children}
    </Box>
  )
}
