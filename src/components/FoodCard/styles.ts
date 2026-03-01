import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.rosa};
  padding: 8px;
  color: ${(props) => props.theme.colors.bege};
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex-grow: 1;
`

export const BotaoAdicionar = styled.button`
  background-color: ${(props) => props.theme.colors.bege};
  color: ${(props) => props.theme.colors.rosa};
  border: none;
  padding: 4px 0;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
`
