import styled from 'styled-components'

export const Imagem = styled.div<{ foto: string }>`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.foto});
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`

export const Container = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 32px 0;
  color: ${(props) => props.theme.colors.branco};

  @media (max-width: 1024px) {
    padding: 32px 20px;
  }

  @media (max-width: 768px) {
    padding: 32px 20px;
  }
`

export const Categoria = styled.span`
  font-weight: 100;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const Nome = styled.h2`
  font-weight: 900;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`
