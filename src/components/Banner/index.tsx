import * as S from './styles'

type Props = {
  categoria: string
  nome: string
  capa: string
}

const Banner = ({ categoria, nome, capa }: Props) => (
  <S.Imagem foto={capa}>
    <div className="container" style={{ height: '100%' }}>
      <S.Container>
        <S.Categoria>{categoria}</S.Categoria>
        <S.Nome>{nome}</S.Nome>
      </S.Container>
    </div>
  </S.Imagem>
)

export default Banner
