import { useDispatch } from 'react-redux'
import * as S from './styles'
import { openModal } from '../../store/reducers/cart'

type Props = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

const FoodCard = ({ id, foto, nome, descricao, porcao, preco }: Props) => {
  const dispatch = useDispatch()

  const handleOpenModal = () => {
    dispatch(openModal({ id, foto, nome, descricao, porcao, preco }))
  }

  return (
    <S.Card onClick={handleOpenModal}>
      <img src={foto} alt={nome} />
      <S.Titulo>{nome}</S.Titulo>
      <S.Descricao>{descricao}</S.Descricao>
      <S.BotaoAdicionar>
        Adicionar ao carrinho
      </S.BotaoAdicionar>
    </S.Card>
  )
}

export default FoodCard
