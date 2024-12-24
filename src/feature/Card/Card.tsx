import { Input } from './Input'
import { Output } from './Output'
import styles from './index.module.scss'
import DotGridIcon from '../../assets/dotGridIcon.svg'
import { InputField, Paper, Typography } from '../../components'
import { DisabledSelectMenu } from '../../components/DisabledSelectMenu'

export interface CardProps {
  inputValue: number
  setOutputValue: React.Dispatch<React.SetStateAction<number>>
  title: string
}

export const Card = (props: CardProps) => {
  // TODO: IMPLEMENT THE INPUT & OUTPUT calculation
  const { inputValue, setOutputValue, title } = props

  return (
    <Paper className={styles.root}>
      <div className={styles.title}>
        <img src={DotGridIcon} width={20} className={styles.icon} />
        <Typography fontSize={16} weight="demi" color="neutral-400">
          {title}
        </Typography>
      </div>
      <InputField
        label="Equation"
        className={styles.equationInputField}
        fullWidth
      />
      <DisabledSelectMenu
        label="Next function"
        placeholder="Function: 2"
        className={styles.nextFunctionInputField}
        fullWidth
      />
      <div className={styles.inputOutputContainer}>
        <Input />
        <Output />
      </div>
    </Paper>
  )
}
