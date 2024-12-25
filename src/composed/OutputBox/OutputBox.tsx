import { CircleNode } from '../NodeConnector'
import { Box, InputField, InputFieldProps, Typography } from '../../components'
import { stylesFunction } from '../../tokens'
import { joinClassNames } from '../../utils'
import styles from './index.module.scss'

export interface InputBoxProps extends InputFieldProps {}

export const OutputBox = (props: InputBoxProps) => {
  const { classes: _, ...other } = props
  return (
    <InputField
      startAdornment={
        <Box
          stylesObject={{
            borderRight: 1,
            height: 100,
            py: 16,
            pr: 12,
            borderColor: 'success-200',
          }}
        >
          <CircleNode />
        </Box>
      }
      classes={{
        wrapper: stylesFunction({
          border: 1,
          borderWidth: 2,
          borderRadius: 16,
          borderColor: 'success-300',
          maxWidth: 'fit-content',
        }),
        root: joinClassNames(
          stylesFunction({
            m: 8,
            alignSelf: 'end',
          }),
          styles.root
        ),
        input: stylesFunction({
          textWeight: 'bold',
          fontSize: 16,
        }),
      }}
      label={
        <Typography
          Component="p"
          stylesObject={{
            py: 4,
            mb: 2,
            px: 12,
            borderRadius: 'pill',
            display: 'inline-block',
            bgColor: 'success-400',
          }}
          weight="demi"
          color="neutral-0"
        >
          Final Output y
        </Typography>
      }
      align="right"
      // inputProps={{ readOnly: true }}
      {...other}
    />
  )
}
