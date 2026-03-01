import * as S from './styles'
import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'

const Footer = () => (
  <S.Container>
    <img src={logo} alt="efood" />
    <S.RedesSociais>
      <img src={instagram} alt="Instagram" />
      <img src={facebook} alt="Facebook" />
      <img src={twitter} alt="Twitter" />
    </S.RedesSociais>
    <S.TextoDireitos>
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade do produto é toda do estabelecimento contratado.
    </S.TextoDireitos>
  </S.Container>
)

export default Footer
