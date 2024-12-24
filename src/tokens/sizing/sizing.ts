import styles from './index.module.scss'
import { joinClassNames } from '../../utils'


type SizingClassModifier = 25 | 50 | 75 | 100 | 'auto'
type Sizing100ClassModifier = 100

export interface SizingProps {
  /**
   * Sizing - Easily make an element as wide or as tall (relative to its parent) with the width and height utilities.
   */
  width?: SizingClassModifier
  minWidth?: Sizing100ClassModifier
  maxWidth?: Sizing100ClassModifier
  viewPortWidth?: Sizing100ClassModifier
  minViewPortWidth?: Sizing100ClassModifier
  maxViewPortWidth?: Sizing100ClassModifier
  height?: SizingClassModifier
  minHeight?: Sizing100ClassModifier
  maxHeight?: Sizing100ClassModifier
  viewPortHeight?: Sizing100ClassModifier
  minViewPortHeight?: Sizing100ClassModifier
  maxViewPortHeight?: Sizing100ClassModifier
}

export const sizing = (props: SizingProps) => {
  const width = getSizingClasses('w', props?.width)
  const minWidth = getSizingClasses('min-w', props?.minWidth)
  const maxWidth = getSizingClasses('mw', props?.maxWidth)
  const viewPortWidth = getSizingClasses('vw', props?.viewPortWidth)
  const minViewPortWidth = getSizingClasses('min-vw', props?.minViewPortWidth)
  const maxViewPortWidth = getSizingClasses('mvw', props?.maxViewPortWidth)

  const height = getSizingClasses('h', props?.height)
  const minHeight = getSizingClasses('min-h', props?.minHeight)
  const maxHeight = getSizingClasses('mh', props?.maxHeight)
  const viewPortHeight = getSizingClasses('vh', props?.viewPortHeight)
  const minViewPortHeight = getSizingClasses('min-vh', props?.minViewPortHeight)
  const maxViewPortHeight = getSizingClasses('mvh', props?.maxViewPortHeight)

  return joinClassNames(
    width,
    minWidth,
    maxWidth,
    viewPortWidth,
    minViewPortWidth,
    maxViewPortWidth,
    height,
    minHeight,
    maxHeight,
    viewPortHeight,
    minViewPortHeight,
    maxViewPortHeight
  )
}

const getSizingClasses = (
  classPrefix: string,
  classModifier?: SizingClassModifier | Sizing100ClassModifier
) => {
  if (classPrefix && classModifier) {
    return styles[`${classPrefix}-${classModifier}`]
  }
}
