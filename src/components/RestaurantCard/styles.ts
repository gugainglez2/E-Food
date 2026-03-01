import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${props => props.theme.colors.branco};
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    display: block;
    width: 100%;
    height: 248px;
    object-fit: cover;
  }
`

export const CardContent = styled.div`
  padding: 8px;
  border-right: 1px solid ${props => props.theme.colors.rosa};
  border-bottom: 1px solid ${props => props.theme.colors.rosa};
  border-left: 1px solid ${props => props.theme.colors.rosa};
  background-color: ${props => props.theme.colors.branco};
`

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 18px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const AvaliacaoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 18px;

  img {
    width: 21px;
    height: 21px;
  }
`
