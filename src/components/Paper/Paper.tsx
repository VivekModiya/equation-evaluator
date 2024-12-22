import { joinClassNames } from '../../utils'
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
}

export const Paper = (props: PaperProps) => {
  const {
    borderRadius = 16,
    elevation = 2,
    className,
    children,
    ...other
  } = props

  const rootClassName = joinClassNames(
    className,
    styles[`border_${borderRadius}`],
    elevation ? styles.elevation : ''
  )

  return (
    <div className={rootClassName} {...other}>
      {children}
    </div>
  )
}
