import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.bege};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RedesSociais = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`

export const TextoDireitos = styled.p`
  font-size: 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.rosa};
  max-width: 480px;
  line-height: 12px;
  padding: 0 20px;
`
