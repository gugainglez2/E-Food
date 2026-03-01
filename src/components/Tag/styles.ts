import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const baseStyles = css`
  background-color: ${(props) => props.theme.colors.rosa};
  color: ${(props) => props.theme.colors.bege};
  font-weight: bold;
  display: inline-block;
`

export const TagContainer = styled.div`
  ${baseStyles}
  font-size: 12px;
  padding: 6px 4px;
`

export const ButtonContainer = styled(Link)`
  ${baseStyles}
  font-size: 14px;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
`
