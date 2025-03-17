import styled from 'styled-components'
import { InputProps } from '@/types'
import { pxTorem } from '@/utils'

export const StyledInput = styled.input<InputProps>`
  background-color: ${(props) => props.theme.textInput.active};
  color: ${(props) => props.theme.textInput.activeColor};
  border-radius: ${pxTorem(8)};
  border: ${pxTorem(1)} solid ${(props) => props.theme.textInput.borderColor};
  box-sizing: border-box;
  cursor: pointer;
  height: ${pxTorem(40)};
  font-size: ${pxTorem(14)};
  font-weight: 500;
  padding: ${pxTorem(8)} ${pxTorem(15)};
  transition: background-color 0.3s;
  width: 100%;
  margin: 0;

  &:disabled {
    background-color: ${(props) => props.theme.textInput.disabledColor};
    border: ${pxTorem(1)} solid
      ${(props) => props.theme.textInput.disabledBorderColor};
    color: ${(props) => props.theme.textInput.disabledColor};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme.textInput.placeholderColor};
  }
`
