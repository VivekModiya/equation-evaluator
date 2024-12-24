import { joinClassNames } from '../../utils'
import styles from './index.module.scss'

export type SpaceClassModifier =
  | 0
  | 2
  | 4
  | 8
  | 12
  | 16
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
export type SpaceClassModifierWithAuto = SpaceClassModifier | 'auto'
type ViewPortModifier<T> = {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  xxl?: T
}

type SpacingWithAuto =
  | SpaceClassModifierWithAuto
  | ViewPortModifier<SpaceClassModifierWithAuto>

type Spacing = SpaceClassModifier | ViewPortModifier<SpaceClassModifier>

export interface SpacingProps {
  /**
   * Spacing : A wide range of shorthand responsive margin and padding utility classes to modify an element's appearance.
   *
   * Notation : The space utility converts shorthand margin and padding props to margin and padding CSS declarations. The props are named using the format {property}{sides}.
   *
   * Where property is one of:
   *
   * m or margin - for classes that set margin
   * p or padding - for classes that set padding
   *
   * Where sides is one of:
   *
   * t or Top - for classes that set margin-top or padding-top
   * b or Bottom - for classes that set margin-bottom or padding-bottom
   * l or Left - for classes that set margin-left or padding-left
   * r or Right - for classes that set margin-right or padding-right
   * x or X - for classes that set both *-left and *-right
   * y or Y - for classes that set both *-top and *-bottom
   * blank - for classes that set a margin or padding on all 4 sides of the element
   */
  m?: SpacingWithAuto
  mt?: SpacingWithAuto
  mr?: SpacingWithAuto
  mb?: SpacingWithAuto
  ml?: SpacingWithAuto
  mx?: SpacingWithAuto
  my?: SpacingWithAuto

  p?: Spacing
  pt?: Spacing
  pr?: Spacing
  pb?: Spacing
  pl?: Spacing
  px?: Spacing
  py?: Spacing

  /**
   * Gap - The gap property defines the size of the gap between the rows and between the columns in flexbox, grid or multi-column layout.
   */
  gap?: Spacing
  /**
   * Row Gap - The gap property defines the size of the gap between the rows in flexbox, grid or multi-column layout.
   */
  gapRow?: Spacing
  /**
   * Column Gap - The gap property defines the size of the gap between between the columns in flexbox, grid or multi-column layout.
   */
  gapCol?: Spacing
}

export const spacing = (props: SpacingProps) => {
  const margin = getSpacingClasses('m', props?.m)
  const marginTop = getSpacingClasses('mt', props?.mt)
  const marginRight = getSpacingClasses('mr', props?.mr)
  const marginBottom = getSpacingClasses('mb', props?.mb)
  const marginLeft = getSpacingClasses('ml', props?.ml)
  const marginX = getSpacingClasses('mx', props?.mx)
  const marginY = getSpacingClasses('my', props?.my)
  const padding = getSpacingClasses('p', props?.p)
  const paddingTop = getSpacingClasses('pt', props?.pt)
  const paddingRight = getSpacingClasses('pr', props?.pr)
  const paddingBottom = getSpacingClasses('pb', props?.pb)
  const paddingLeft = getSpacingClasses('pl', props?.pl)
  const paddingX = getSpacingClasses('px', props?.px)
  const paddingY = getSpacingClasses('py', props?.py)

  const gap = getSpacingClasses('gap', props?.gap)
  const gapRow = getSpacingClasses('gapRow', props?.gapRow)
  const gapCol = getSpacingClasses('gapCol', props?.gapCol)

  return joinClassNames(
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginX,
    marginY,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingX,
    paddingY,
    gap,
    gapRow,
    gapCol
  )
}

const getSpacingClasses = (
  classPrefix: string,
  classModifier?: Spacing | SpacingWithAuto
) => {
  const viewPortModifiers = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
  if (classPrefix && typeof classModifier === 'object') {
    return viewPortModifiers
      .map(viewPortModifier => {
        if (
          viewPortModifier === 'xs' &&
          (classModifier[viewPortModifier] === 0 ||
            classModifier[viewPortModifier])
        ) {
          return styles[`${classPrefix}-${classModifier[viewPortModifier]}`]
        } else if (
          classModifier[viewPortModifier] === 0 ||
          classModifier[viewPortModifier]
        ) {
          return styles[
            `${classPrefix}-${viewPortModifier}-${classModifier[viewPortModifier]}`
          ]
        }
      })
      .filter(Boolean)
      .join(' ')
  } else if (classPrefix && (classModifier === 0 || classModifier)) {
    return styles[`${classPrefix}-${classModifier}`]
  }
}
