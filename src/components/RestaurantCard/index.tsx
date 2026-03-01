import * as S from './styles'
import { ButtonContainer } from '../Tag/styles'
import estrela from '../../assets/estrela.svg'
import Tag from '../Tag'

type Props = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  infos: string[]
}

const Product = ({ id, titulo, avaliacao, descricao, capa, infos }: Props) => (
  <S.Card>
    <img src={capa} alt={titulo} />
    <S.TagContainer>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.TagContainer>
    <S.CardContent>
      <S.TituloContainer>
        <h3>{titulo}</h3>
          <S.AvaliacaoWrapper>
            <span>{avaliacao}</span>
            <img src={estrela} alt="estrela" />
          </S.AvaliacaoWrapper>
      </S.TituloContainer>
      <S.Descricao>{descricao}</S.Descricao>

      <ButtonContainer to={`/perfil/${id}`}>
        Saiba mais
      </ButtonContainer>
    </S.CardContent>
  </S.Card>
)

export default Product
