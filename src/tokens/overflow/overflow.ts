import styles from './index.module.scss'
import { joinClassNames } from '../../utils'

type OverflowClassModifier = 'auto' | 'hidden' | 'visible' | 'scroll'

export interface OverflowProps {
  /**
   * Overflow - Set contentainer's overflow property for both horizontal and vertical
   */
  overflow?: OverflowClassModifier
  /**
   * Overflow - X - Set contentainer's overflow property for horizontal
   */
  overflowX?: OverflowClassModifier
  /**
   * Overflow - Y - Set contentainer's overflow property for both vertical
   */
  overflowY?: OverflowClassModifier
}

export const overflow = (props: OverflowProps) => {
  const overflow = getOverflowClasses('overflow', props?.overflow)
  const overflowX = getOverflowClasses('overflowX', props?.overflowX)
  const overflowY = getOverflowClasses('overflowY', props?.overflowY)

  return joinClassNames(overflow, overflowX, overflowY)
}

const getOverflowClasses = (
  classPrefix: string,
  classModifier?: OverflowClassModifier
) => {
  if (classPrefix && classModifier) {
    return styles[`${classPrefix}-${classModifier}`]
  }
}
