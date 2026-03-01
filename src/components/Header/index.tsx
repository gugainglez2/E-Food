import * as S from './styles'
import logo from '../../assets/logo.svg'

const Header = () => (
  <S.HeaderBar>
    <div className="container">
      <S.Logo src={logo} alt="efood" />
      <S.Titulo>
        Viva experiências gastronômicas no conforto da sua casa
      </S.Titulo>
    </div>
  </S.HeaderBar>
)

export default Header
