import * as S from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => {
  const itensNoCarrinho = 0

  return (
    <S.HeaderBar>
      <div className="container">
        <S.Content>
          <Link to="/">Restaurantes</Link>
          <S.Logo src={logo} alt="efood" />
          <span>{itensNoCarrinho} produto(s) no carrinho</span>
        </S.Content>
      </div>
    </S.HeaderBar>
  )
}

export default HeaderPerfil
