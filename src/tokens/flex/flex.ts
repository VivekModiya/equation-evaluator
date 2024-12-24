import styles from './index.module.scss'
import { joinClassNames } from '../../utils'

type flexClassModifier = 'none' | 'auto'
type flexDirectionClassModifier =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
type flexWrapClassModifier = 'wrap' | 'nowrap' | 'wrap-reverse'
type justifyContentClassModifier =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
type alignItemsClassModifier =
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch'
type alignContentClassModifier =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'stretch'
export type orderClassModifier = 1 | 2 | 3 | 4 | 5 | 'first' | 'last'
type flexGrowClassModifier = 0 | 1
type flexShrinkClassModifier = 0 | 1
type alignSelfClassModifier =
  | 'auto'
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch'
type ViewPortModifier<T> = {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  xxl?: T
}
type Flex = flexClassModifier | ViewPortModifier<flexClassModifier>
type FlexDirection =
  | flexDirectionClassModifier
  | ViewPortModifier<flexDirectionClassModifier>
type FlexWrap = flexWrapClassModifier | ViewPortModifier<flexWrapClassModifier>
type JustifyContent =
  | justifyContentClassModifier
  | ViewPortModifier<justifyContentClassModifier>
type AlignItems =
  | alignItemsClassModifier
  | ViewPortModifier<alignItemsClassModifier>
type AlignContent =
  | alignContentClassModifier
  | ViewPortModifier<alignContentClassModifier>
type Order = orderClassModifier | ViewPortModifier<orderClassModifier>
type FlexGrow = flexGrowClassModifier | ViewPortModifier<flexGrowClassModifier>
type FlexShrink =
  | flexShrinkClassModifier
  | ViewPortModifier<flexShrinkClassModifier>
type AlignSelf =
  | alignSelfClassModifier
  | ViewPortModifier<alignSelfClassModifier>
export interface FlexProps {
  /**
   * Flex : Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.
   *
   */
  flex?: Flex
  flexDirection?: FlexDirection
  flexWrap?: FlexWrap
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  alignContent?: AlignContent
  order?: Order
  flexGrow?: FlexGrow
  flexShrink?: FlexShrink
  alignSelf?: AlignSelf
}

export const flex = (props: FlexProps) => {
  const flex = getFlexClasses('flex', props?.flex)
  const flexDirection = getFlexClasses('flex', props?.flexDirection)
  const flexWrap = getFlexClasses('flex', props?.flexWrap)
  const justifyContent = getFlexClasses(
    'justify-content',
    props?.justifyContent
  )
  const alignItems = getFlexClasses('align-items', props?.alignItems)
  const alignContent = getFlexClasses('align-content', props?.alignContent)
  const order = getFlexClasses('order', props?.order)
  const flexGrow = getFlexClasses('flex-grow', props?.flexGrow)
  const flexShrink = getFlexClasses('flex-shrink', props?.flexShrink)
  const alignSelf = getFlexClasses('align-self', props?.alignSelf)

  return joinClassNames(
    flex,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    order,
    flexGrow,
    flexShrink,
    alignSelf
  )
}

const getFlexClasses = (
  classPrefix: string,
  classModifier?:
    | Flex
    | FlexDirection
    | FlexWrap
    | JustifyContent
    | AlignItems
    | AlignContent
    | Order
    | FlexGrow
    | FlexShrink
    | AlignSelf
) => {
  const viewPortModifiers = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
  if (classPrefix && typeof classModifier === 'object') {
    return viewPortModifiers
      .map(viewPortModifier => {
        if (
          viewPortModifier === 'xs' &&
          (classModifier['xs'] === 0 || classModifier['xs'])
        ) {
          return styles[
            `${classPrefix}-${classModifier['xs']}` as keyof typeof styles
          ]
        } else if (
          classModifier[viewPortModifier] === 0 ||
          classModifier[viewPortModifier]
        ) {
          return styles[
            `${classPrefix}-${viewPortModifier}-${classModifier[viewPortModifier]}` as keyof typeof styles
          ]
        }
      })
      .filter(Boolean)
      .join(' ')
  } else if (classPrefix && (classModifier === 0 || classModifier)) {
    return styles[`${classPrefix}-${classModifier}` as keyof typeof styles]
  }
}
