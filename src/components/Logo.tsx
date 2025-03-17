import styled from 'styled-components'
import { pxTorem } from '@/utils'

export const Logo = styled.figure<{ height: number; width: number }>`
  background-image: url(/${(props) => props.theme.appLogo});
  background-size: cover;
  height: ${(props) => pxTorem(props.height)};
  width: ${(props) => pxTorem(props.width)};
`
