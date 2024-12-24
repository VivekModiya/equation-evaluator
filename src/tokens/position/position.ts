import styles from './index.module.scss'
import { joinClassNames } from '../../utils'

type PositionClassModifier =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky'

type SideClassModifier = 0 | 50 | 100
type TranslateClassModifier = 'middle' | 'middle-x' | 'middle-y'
type ZIndexClassModifier =
  | 'dropdown'
  | 'sticky'
  | 'fixed'
  | 'modal-backdrop'
  | 'drawer'
  | 'modal'
  | 'popover'
  | 'tooltip'

export interface PositionProps {
  /**
   * Position - Use these shorthand utilities for quickly configuring the position of an element.
   */
  position?: PositionClassModifier
  top?: SideClassModifier
  right?: SideClassModifier
  bottom?: SideClassModifier
  left?: SideClassModifier
  translate?: TranslateClassModifier
  zIndex?: ZIndexClassModifier
}

export const position = (props: PositionProps) => {
  const position = getPositionClasses('position', props?.position)
  const topSide = getPositionClasses('top', props?.top)
  const rightSide = getPositionClasses('right', props?.right)
  const bottomSide = getPositionClasses('bottom', props?.bottom)
  const leftSide = getPositionClasses('left', props?.left)
  const translate = getPositionClasses('translate', props?.translate)
  const zIndex = getPositionClasses('zIndex', props?.zIndex)
  return joinClassNames(
    position,
    topSide,
    rightSide,
    bottomSide,
    leftSide,
    translate,
    zIndex
  )
}

const getPositionClasses = (
  classPrefix: string,
  classModifier?:
    | PositionClassModifier
    | SideClassModifier
    | TranslateClassModifier
    | ZIndexClassModifier
) => {
  if (classPrefix && (classModifier === 0 || classModifier)) {
    return styles[`${classPrefix}-${classModifier}`]
  }
}
