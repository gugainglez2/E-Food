import * as S from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
}

const ProductCard = ({ foto, nome, descricao }: Props) => {
  const getDescricao = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }

  return (
    <S.Card>
      <img src={foto} alt={nome} />
      <S.Titulo>{nome}</S.Titulo>
      <S.Descricao>{getDescricao(descricao)}</S.Descricao>
      <S.BotaoAdicionar>
        Adicionar ao carrinho
      </S.BotaoAdicionar>
    </S.Card>
  )
}

export default ProductCard
