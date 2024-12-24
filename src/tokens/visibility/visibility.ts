import { joinClassNames } from '../../utils'
import styles from './index.module.scss'

type VisibilityClassModifier = 'visible' | 'hidden'

export interface VisibilityProps {
  /**
   * Visibility - Set contentainer's visibility property
   */
  visibility?: VisibilityClassModifier
}

export const visibility = (props: VisibilityProps) => {
  const visibility = getVisibilityClasses('visibility', props?.visibility)

  return joinClassNames(visibility)
}

const getVisibilityClasses = (
  classPrefix: string,
  classModifier?: VisibilityClassModifier
) => {
  if (classPrefix && classModifier) {
    return styles[`${classPrefix}-${classModifier}`]
  }
}
