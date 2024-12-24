import styles from './index.module.scss'
import { joinClassNames } from '../../utils'

type DisplayClassModifier =
  | 'inline'
  | 'inline-block'
  | 'block'
  | 'grid'
  | 'table'
  | 'table-row'
  | 'table-cell'
  | 'flex'
  | 'inline-flex'
  | 'none'

type ViewPortModifier<T> = {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  xxl?: T
}
type Display = DisplayClassModifier | ViewPortModifier<DisplayClassModifier>

export interface DisplayProps {
  /**
   * Box Shadow - The helpers allow you to control relative depth, or distance, between two surfaces.
   */
  display?: Display
}

export const display = (props: DisplayProps) => {
  const display = getDisplayClasses('d', props?.display)
  return joinClassNames(display)
}

const getDisplayClasses = (classPrefix: string, classModifier?: Display) => {
  const viewPortModifiers = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
  if (classPrefix && typeof classModifier === 'object') {
    return viewPortModifiers
      .map(viewPortModifier => {
        if (viewPortModifier === 'xs' && classModifier['xs']) {
          return styles[`${classPrefix}-${classModifier['xs']}`]
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
