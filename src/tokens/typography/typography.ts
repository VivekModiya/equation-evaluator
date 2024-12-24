import styles from './index.module.scss'

import { TextColorProps, textColorPalette } from '../colors'
import { joinClassNames } from '../../utils'

type FontSize =
  | 'inherit'
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 26
  | 32
  | 36
  | 40
  | 48
  | 56
  | 64
  | 80

type TextAlignClassModifier =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'inherit'

type TextWeightClassModifier = 'initial' | 'normal' | 'demi' | 'bold'
type TextOverflowClassModifier = 'clip' | 'truncate'
type WhiteSpaceClassModifier = 'normal' | 'nowrap'
type WordBreakClassModifier = 'normal' | 'keep-all' | 'break-all' | 'break-word'
type LineHeightClassModifier = 'single-line' | 'multi-line'
// type TextDecorationClassModifier = none | underline | lineThrough
// type TextTransformClassModifier = lowercase | uppercase | capitalize
type ViewPortModifier<T> = {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  xxl?: T
}

type TextAlign =
  | TextAlignClassModifier
  | ViewPortModifier<TextAlignClassModifier>

export interface TypographySxProps extends TextColorProps {
  /**
   * The fontSize applied to the font, icon & avatar. It can be also configure to inherit font size.
   */
  fontSize?: FontSize
  /**
   * Set the text-align on the component.
   */
  textAlign?: TextAlign
  /**
   * Set the text-weight on the component.
   */
  textWeight?: TextWeightClassModifier
  /**
   * TextOverflow - Set contentainer's text overflow property
   */
  textOverflow?: TextOverflowClassModifier
  /**
   * White Space - Set contentainer's white space property for text wrapping.
   */
  whiteSpace?: WhiteSpaceClassModifier
  /**
   * wordBreak - property specifies how words should break when reaching the end of a line.
   */
  wordBreak?: WordBreakClassModifier
  /**
   * lineHeight - property specifies the height of a line.
   */
  lineHeight?: LineHeightClassModifier
}

export const typography = (props: TypographySxProps) => {
  const fontsize = getTypographyClasses('fontSize', props?.fontSize)
  const textAlign = getTypographyClasses('align', props?.textAlign)
  const textWeight = getTypographyClasses('weight', props?.textWeight)
  const textOverflow = getTypographyClasses('text', props?.textOverflow)
  const whiteSpace = getTypographyClasses('text', props?.whiteSpace)
  const textColor = textColorPalette({
    textColor: props?.textColor,
  })
  const wordBreak = getTypographyClasses('wordbreak', props?.wordBreak)
  const lineHeight = getTypographyClasses('lineHeight', props?.lineHeight)
  return joinClassNames(
    fontsize,
    textAlign,
    textWeight,
    textOverflow,
    whiteSpace,
    textColor,
    wordBreak,
    lineHeight
  )
}

const getTypographyClasses = (
  classPrefix: string,
  classModifier?:
    | FontSize
    | TextAlign
    | TextOverflowClassModifier
    | WhiteSpaceClassModifier
    | TextWeightClassModifier
    | WordBreakClassModifier
    | LineHeightClassModifier
) => {
  const viewPortModifiers = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
  if (classPrefix && typeof classModifier === 'object') {
    return viewPortModifiers
      .map(viewPortModifier => {
        if (viewPortModifier === 'xs' && classModifier[viewPortModifier]) {
          return styles[`${classPrefix}-${classModifier[viewPortModifier]}`]
        } else if (classModifier[viewPortModifier]) {
          return styles[
            `${classPrefix}-${viewPortModifier}-${classModifier[viewPortModifier]}`
          ]
        }
      })
      .filter(Boolean)
      .join(' ')
  } else if (classPrefix && classModifier) {
    return styles[`${classPrefix}-${classModifier}`]
  }
}
