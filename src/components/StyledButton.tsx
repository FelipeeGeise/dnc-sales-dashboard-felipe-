import styled from 'styled-components'
import { ButtonProps } from '@/types'
import { pxTorem } from '@/utils'

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${pxTorem(20)};
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-size: ${pxTorem(16)};
  font-weight: bold;
  height: ${pxTorem(100)};
  padding: 0 ${pxTorem(16)};
  transition: background-color 0.3s ease-in-out;
  width: 100%;
  margin: 0;

  &.primary {
    background-color: ${(props) => props.theme.buttons.primary};
    color: ${(props) => props.theme.buttons.primaryColor};

    &:hover {
      background-color: ${(props) => props.theme.buttons.primaryHover};
    }
  }

  &.alert {
    background-color: ${(props) => props.theme.buttons.alert};
    color: ${(props) => props.theme.buttons.alertColor};

    &:hover {
      background-color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  &.borderless-alert {
    background-color: transparent;
    color: ${(props) => props.theme.buttons.alert};
    padding: 0;
    width: auto;

    &:hover {
      color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.disabled};
    color: ${(props) => props.theme.buttons.disabledColor};
    cursor: not-allowed;

    &:hover {
      background-color: ${(props) => props.theme.buttons.disabled};
      color: ${(props) => props.theme.buttons.disabledColor};
    }
  }
`
