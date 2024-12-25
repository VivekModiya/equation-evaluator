import { stylesFunction, StylesFunctionProps } from '../../tokens'
import { joinClassNames } from '../../utils'

const WhiteListedComponentTypes = [
  'p',
  'span',
  'div',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'label',
] as const

export interface TypographyProps {
  Component?: (typeof WhiteListedComponentTypes)[number]
  color?: StylesFunctionProps['textColor']
  weight?: StylesFunctionProps['textWeight']
  lineHeight?: StylesFunctionProps['lineHeight']
  className?: string
  fontSize?: StylesFunctionProps['fontSize']
  children?: React.ReactNode
  stylesObject?: StylesFunctionProps
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
    stylesObject,
  } = props

  const _className = joinClassNames(
    stylesFunction({
      textColor: color,
      textWeight: weight,
      lineHeight: lineHeight,
      fontSize: fontSize,
      ...stylesObject,
    }),
    className
  )

  const _Component = WhiteListedComponentTypes.includes(Component)
    ? Component
    : 'span'

  return <_Component className={_className}>{children}</_Component>
}
