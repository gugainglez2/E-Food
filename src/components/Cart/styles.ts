import styled from 'styled-components'
import lixeiraDeReciclagem from '../../assets/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`

export const CartContainer = styled.aside`
  background-color: ${(props) => props.theme.colors.rosa};
  width: 360px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 101;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 300px;
  }

  ul {
    list-style: none;
    flex: 1;
    overflow-y: auto;
    margin-bottom: 16px;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.bege};
    }
  }
`

export const CartItem = styled.li`
  background-color: ${(props) => props.theme.colors.bege};
  display: flex;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.rosa};
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.rosa};
  }

  button {
    background-image: url('${lixeiraDeReciclagem}');
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.bege};
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 16px;
`

export const ButtonCheckout = styled.button`
  background-color: ${(props) => props.theme.colors.bege};
  color: ${(props) => props.theme.colors.rosa};
  border: none;
  padding: 4px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`
export const FormContainer = styled.div`
  color: ${(props) => props.theme.colors.bege};

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  input {
    background-color: ${(props) => props.theme.colors.bege};
    border: 1px solid ${(props) => props.theme.colors.bege};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    outline: none;
    font-weight: bold;

    &.error {
      border: 3px solid red;
    }
  }

  small {
    color: #ffd7d7;
    font-weight: bold;
    display: block;
    margin-top: 4px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }

  .back {
    margin-top: 8px;
  }

  .next {
    margin-top: 8px;
  }
`
