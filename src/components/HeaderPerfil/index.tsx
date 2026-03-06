import * as S from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import type { RootState } from '../../store'
import { useSelector } from 'react-redux'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootState) => state.cart)

  return (
    <S.HeaderBar>
      <div className="container">
        <S.Content>
          <Link to="/">Restaurantes</Link>
          <S.Logo src={logo} alt="efood" />
          <span>{items.length} produto(s) no carrinho</span>
        </S.Content>
      </div>
    </S.HeaderBar>
  )
}

export default HeaderPerfil
