import React from 'react'
import styles from './index.module.scss'
import { joinClassNames } from '../../utils/joinClassNames'

export interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Background = (props: BackgroundProps) => {
  const { className, ...other } = props

  return (
    <div
      className={joinClassNames(className, styles.dotedBackground)}
      {...other}
    />
  )
}
