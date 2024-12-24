
import { SpacingProps, spacing } from './spacing'
import { BorderProps, border } from './border'

import { DisplayProps, display } from './display'
import { OverflowProps, overflow } from './overflow'
import { TypographySxProps, typography } from './typography'
import { VisibilityProps, visibility } from './visibility'
import { FlexProps, flex } from './flex'
import { ColorPaletteProps, colorPalette } from './colors'
import { PositionProps, position } from './position'
import { SizingProps, sizing } from './sizing'
import { joinClassNames } from '../utils'

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface StylesFunctionProps
  extends SpacingProps,
    BorderProps,
    DisplayProps,
    OverflowProps,
    TypographySxProps,
    VisibilityProps,
    FlexProps,
    ColorPaletteProps,
    PositionProps,
    SizingProps {}

export const stylesFunction = (props: StylesFunctionProps = {}) => {
  const spacingClasses = spacing(props)
  const borderClasses = border(props)
  const displayClasses = display(props)
  const overflowClasses = overflow(props)
  const typographyClasses = typography(props)
  const visibilityClasses = visibility(props)
  const flexClasses = flex(props)
  const colorClasses = colorPalette(props)
  const positionClasses = position(props)
  const sizingClasses = sizing(props)
  return joinClassNames(
    spacingClasses,
    borderClasses,
    displayClasses,
    overflowClasses,
    typographyClasses,
    visibilityClasses,
    flexClasses,
    colorClasses,
    positionClasses,
    sizingClasses
  )
}
