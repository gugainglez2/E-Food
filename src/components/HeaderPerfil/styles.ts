import styled from 'styled-components'
import fundoHero from '../../assets/fundo_hero.svg';

export const HeaderBar = styled.header`
  background-color: ${(props) => props.theme.colors.bege};
  padding: 40px 0;
  display: block;
  background-image: url(${fundoHero});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a, span {
    color: ${(props) => props.theme.colors.rosa};
    font-weight: 900;
    font-size: 18px;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`

export const Logo = styled.img`
  width: 125px;

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 8px;
  }
`
