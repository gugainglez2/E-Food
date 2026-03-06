import type { Restaurante } from '../../models'
import RestaurantCard from '../RestaurantCard'
import * as S from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => (
  <div className="container">
    <S.ListContainer>
      {restaurantes.map((restaurante) => (
        <RestaurantCard
          key={restaurante.id}
          id={restaurante.id}
          titulo={restaurante.titulo}
          avaliacao={restaurante.avaliacao}
          descricao={restaurante.descricao}
          capa={restaurante.capa}
          tipo={restaurante.tipo}
          destacado={restaurante.destacado}
        />
      ))}
    </S.ListContainer>
  </div>
)

export default RestaurantList
