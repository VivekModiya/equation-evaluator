import styles from './index.module.scss'
import { joinClassNames } from '../../utils'
import { BorderColorProps, borderColorPalette } from '../colors'

type BorderClassModifier = 0 | 1
type BorderWidthClassModifier = 1 | 2 | 3 | 4 | 5
type BorderRadiusClassModifier =
  | 0
  | 2
  | 4
  | 8
  | 16
  | 'circle'
  | 'pill'
  | 'all'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
export interface BorderProps extends BorderColorProps {
  /**
   * Border - Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
   */
  border?: BorderClassModifier
  borderTop?: BorderClassModifier
  borderRight?: BorderClassModifier
  borderBottom?: BorderClassModifier
  borderLeft?: BorderClassModifier
  borderWidth?: BorderWidthClassModifier
  borderRadius?: BorderRadiusClassModifier
}

export const border = (props: BorderProps) => {
  const border = getBorderClasses('border', props?.border)
  const borderTop = getBorderClasses('border-top', props?.borderTop)
  const borderRight = getBorderClasses('border-right', props?.borderRight)
  const borderBottom = getBorderClasses('border-bottom', props?.borderBottom)
  const borderLeft = getBorderClasses('border-left', props?.borderLeft)
  const boderColor = borderColorPalette({ borderColor: props?.borderColor })
  const borderTopColor = borderColorPalette({
    borderTopColor: props?.borderTopColor,
  })
  const borderRightColor = borderColorPalette({
    borderRightColor: props?.borderRightColor,
  })
  const borderBottomColor = borderColorPalette({
    borderBottomColor: props?.borderBottomColor,
  })
  const borderLeftColor = borderColorPalette({
    borderLeftColor: props?.borderLeftColor,
  })
  const borderWidth = getBorderClasses('border-width', props?.borderWidth)
  const borderRadius = getBorderClasses('border-radius', props?.borderRadius)

  return joinClassNames(
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    boderColor,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,
    borderWidth,
    borderRadius
  )
}

const getBorderClasses = (
  classPrefix: string,
  classModifier?:
    | BorderClassModifier
    | BorderWidthClassModifier
    | BorderRadiusClassModifier
) => {
  if (classPrefix && (classModifier === 0 || classModifier)) {
    return styles[`${classPrefix}-${classModifier}`]
  }
}
