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
  tipo: string
  destacado: boolean
}

const RestaurantCard = ({ id, titulo, avaliacao, descricao, capa, tipo, destacado }: Props) => {
  const getTags = () => {
    const tags = [tipo]
    if (destacado) {
      tags.unshift('Destaque da semana')
    }
    return tags
  }

  return (
    <S.Card>
      <img src={capa} alt={titulo} />
      <S.TagContainer>
        {getTags().map((tag) => (
          <Tag key={tag}>{tag}</Tag>
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
}

export default RestaurantCard
