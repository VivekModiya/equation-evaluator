import { joinClassNames } from '../../utils'
import styles from './index.module.scss'

type TextColor =
  | 'primary-800'
  | 'primary-700'
  | 'primary-600'
  | 'primary-500'
  | 'primary-400'
  | 'primary-300'
  | 'primary-200'
  | 'primary-100'
  | 'primary-75'
  | 'primary-50'
  | 'neutral-1000'
  | 'neutral-600'
  | 'neutral-500'
  | 'neutral-400'
  | 'neutral-300'
  | 'neutral-200'
  | 'neutral-100'
  | 'neutral-75'
  | 'neutral-0'
  | 'success-700'
  | 'success-600'
  | 'success-500'
  | 'success-400'
  | 'success-300'
  | 'success-200'
  | 'success-100'
  | 'success-75'
  | 'success-50'
  | 'error-700'
  | 'error-600'
  | 'error-500'
  | 'error-400'
  | 'error-300'
  | 'error-200'
  | 'error-100'
  | 'error-75'
  | 'error-50'

export interface TypographyProps {
  Component?:
    | 'p'
    | 'span'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
  color?: TextColor
  weight?: 'normal' | 'demi' | 'bold'
  lineHeight?: 'single-line' | 'multi-line'
  className?: string
  fontSize?: 12 | 14 | 16 | 18 | 20 | 24 | 26 | 32 | 36 | 40 | 48 | 56 | 64 | 80
  children?: string
}

export const Typography = (props: TypographyProps) => {
  const {
    Component = 'span',
    color = 'neutral-1000',
    weight = 'normal',
    lineHeight = 'single-line',
    className,
    fontSize = 14,
    children,
  } = props
  const _className = joinClassNames(
    className,
    styles[`weight_${weight}`],
    styles[`color_${color}`],
    styles[`lineHeight_${lineHeight}`],
    styles[`fontSize_${fontSize}`],
    styles.fontFamily
  )

  // @ts-ignore
  return <Component className={_className}>{children}</Component>
}
