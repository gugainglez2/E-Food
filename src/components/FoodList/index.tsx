import type { Food } from '../../models'
import FoodCard from '../FoodCard'
import * as S from './styles'

type Props = {
  foods: Food[]
}

const FoodList = ({ foods }: Props) => (
  <div className="container">
    <S.Container>
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          id={food.id}
          nome={food.nome}
          foto={food.foto}
          descricao={food.descricao}
          porcao={food.porcao}
          preco={food.preco}
        />
      ))}
    </S.Container>
  </div>
)

export default FoodList
