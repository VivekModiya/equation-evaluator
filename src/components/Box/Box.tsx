import React from 'react'
import { stylesFunction, StylesFunctionProps } from '../../tokens'
import { joinClassNames } from '../../utils'

export interface BoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  stylesObject?: StylesFunctionProps
  Component?:
    | 'div'
    | 'section'
    | 'main'
    | 'span'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
}

export const Box = React.forwardRef<
  React.RefObject<HTMLDivElement> | undefined,
  BoxProps
>((props, ref) => {
  const { stylesObject, className, Component = 'div', ...other } = props

  const _Component = [
    'div',
    'section',
    'main',
    'span',
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ].includes(Component)
    ? Component
    : 'div'

  const _className = joinClassNames(stylesFunction(stylesObject), className)

  // @ts-ignore
  return <_Component ref={ref} className={_className} {...other} />
})
