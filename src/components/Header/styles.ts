import styled from 'styled-components'
import fundoHero from '../../assets/fundo_hero.svg';

export const HeaderBar = styled.header`
  background-color: ${(props) => props.theme.colors.bege};
  padding: 40px 0;
  background-image: url(${fundoHero});
  background-size: cover;
  background-repeat: no-repeat;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 138px;
`

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  color: ${(props) => props.theme.colors.rosa};
  max-width: 540px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 28px;
    max-width: 100%;
    padding: 0 20px;
  }
`
