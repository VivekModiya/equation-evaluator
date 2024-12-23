import styles from './index.module.scss'

export const Circle = () => {
  return (
    <div className={styles.outerCircle}>
      <div className={styles.innerCircle}></div>
    </div>
  )
}
