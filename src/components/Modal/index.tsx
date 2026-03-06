import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import type { RootState } from '../../store'
import closeIcon from '../../assets/close.png'
import { add, closeModal } from '../../store/reducers/cart'

const Modal = () => {
  const { modalItem } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  if (!modalItem) return null;
  const addToCart = () => {
    if (modalItem) {
      dispatch(add(modalItem))
      dispatch(closeModal())
    }
  }

  return (
    <S.ModalContainer>
      <div className="overlay" onClick={() => dispatch(closeModal())} />
      <S.ModalContent>
        <S.CloseButton src={closeIcon} onClick={() => dispatch(closeModal())} />
        <img src={modalItem.foto} alt={modalItem.nome} className="produto-imagem" />
        <div>
          <h3>{modalItem.nome}</h3>
          <p>{modalItem.descricao}</p>
          <p>Serve: {modalItem.porcao}</p>
          <button onClick={addToCart}>
            Adicionar ao carrinho - R$ {modalItem?.preco?.toFixed(2) || '0.00'}
          </button>
        </div>
      </S.ModalContent>
    </S.ModalContainer>
  )
}
export default Modal
