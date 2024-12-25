import { InputBox } from '../InputBox'
import styles from './index.module.scss'
import { OutputBox } from '../OutputBox'
import { Background } from '../../components'
import { FunctionCard } from '../FunctionCard'

export const Playground = () => {
  return (
    <main className={styles.root}>
      <Background className={styles.root}>
        <div className={styles.container}>
          <div className={styles.initialInputWrapper}>
            <InputBox className={styles.initialInput} />
            <FunctionCard
              inputValue={0}
              setOutputValue={() => null}
              title="Function 1"
            />
          </div>
          <FunctionCard
            inputValue={0}
            setOutputValue={() => null}
            title="Function 1"
          />
          <div className={styles.initialInputWrapper}>
            <FunctionCard
              inputValue={0}
              setOutputValue={() => null}
              title="Function 1"
            />
            <OutputBox className={styles.finalOutput} />
          </div>
          <FunctionCard
            inputValue={0}
            setOutputValue={() => null}
            title="Function 1"
          />
          <FunctionCard
            inputValue={0}
            setOutputValue={() => null}
            title="Function 1"
          />
        </div>
      </Background>
    </main>
  )
}
