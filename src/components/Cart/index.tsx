import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { closeCart, remove } from '../../store/reducers/cart'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  if (!isOpen) return null

  return (
    <S.Overlay onClick={() => dispatch(closeCart())}>
      <S.CartContainer onClick={(e) => e.stopPropagation()}>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>R$ {item.preco.toFixed(2)}</span>
              </div>
              <button onClick={() => dispatch(remove(item.id))} />
            </S.CartItem>
          ))}
        </ul>
        <S.TotalContainer>
          <p>Valor total</p>
          <span>R$ {getTotalPrice().toFixed(2)}</span>
        </S.TotalContainer>
        <S.ButtonCheckout>Continuar com a entrega</S.ButtonCheckout>
      </S.CartContainer>
    </S.Overlay>
  )
}

export default Cart
