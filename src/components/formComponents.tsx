import styled from 'styled-components'
import { StyledButton, StyledInput } from '@/components'
import { FormComponentProps } from '@/types'
import { pxTorem } from '@/utils'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxTorem(16)};
`

function FormComponent(props: FormComponentProps) {
  const { inputs, buttons, message } = props

  return (
    <StyledForm>
      {inputs.map((InputProps, index) => (
        <StyledInput key={index} {...InputProps} />
      ))}

      {buttons.map((ButtonProps, index) => (
        <StyledButton key={index} {...ButtonProps} />
      ))}

      {message && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {message.msg}
        </div>
      )}
    </StyledForm>
  )
}

export default FormComponent
