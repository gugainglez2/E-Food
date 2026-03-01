import Product from '../RestaurantCard'
import * as S from './styles'

export type Restaurante = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  infos: string[]
}

type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => (
  <div className="container">
    <S.ListContainer>
      {restaurantes.map((restaurante) => (
        <Product
          key={restaurante.id}
          id={restaurante.id}
          titulo={restaurante.titulo}
          avaliacao={restaurante.avaliacao}
          descricao={restaurante.descricao}
          capa={restaurante.capa}
          infos={restaurante.infos}
        />
      ))}
    </S.ListContainer>
  </div>
)

export default RestaurantList
