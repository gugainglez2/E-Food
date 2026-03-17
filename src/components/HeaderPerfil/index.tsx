import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/logo.svg'
import type { RootState } from '../../store'
import { openCart } from '../../store/reducers/cart'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  return (
    <S.HeaderBar>
      <div className="container">
        <S.Content>
          <Link to="/">Restaurantes</Link>
          <S.Logo src={logo} alt="efood" />
          <span onClick={() => dispatch(openCart())} style={{ cursor: 'pointer' }}>
            {items.length} produto(s) no carrinho
          </span>
        </S.Content>
      </div>
    </S.HeaderBar>
  )
}

export default HeaderPerfil
