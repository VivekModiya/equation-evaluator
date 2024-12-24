import { Background } from '../../components'
import { FinalOutput } from '../../components/FinalOutput'
import { InitialInput } from '../../components/InitialInput/InitialInput'
import { Card } from '../Card/Card'
import styles from './index.module.scss'

export const Playground = () => {
  return (
    <main className={styles.root}>
      <Background className={styles.root}>
        <div className={styles.container}>
          <div className={styles.initialInputWrapper}>
            <InitialInput className={styles.initialInput} />
            <Card
              inputValue={0}
              setOutputValue={() => null}
              title="Function 1"
            />
          </div>
          <Card inputValue={0} setOutputValue={() => null} title="Function 1" />
          <div className={styles.initialInputWrapper}>
            <Card
              inputValue={0}
              setOutputValue={() => null}
              title="Function 1"
            />
            <FinalOutput className={styles.finalOutput} />
          </div>
          <Card inputValue={0} setOutputValue={() => null} title="Function 1" />
          <Card inputValue={0} setOutputValue={() => null} title="Function 1" />
        </div>
      </Background>
    </main>
  )
}
