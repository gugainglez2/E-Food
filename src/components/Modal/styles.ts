import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.rosa};
  color: ${(props) => props.theme.colors.bege};
  padding: 32px;
  position: relative;
  z-index: 1;
  display: flex;
  gap: 24px;
  max-width: 960px;
  width: 100%;

  .produto-imagem {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: ${(props) => props.theme.colors.bege};
    color: ${(props) => props.theme.colors.rosa};
    font-weight: bold;
    font-size: 14px;
    padding: 4px 8px;
    border: none;
    cursor: pointer;
  }
`

export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`
