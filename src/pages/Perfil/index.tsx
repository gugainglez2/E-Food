import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import { useGetRestauranteIdQuery } from '../../services/api'
import Modal from '../../components/Modal'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading } = useGetRestauranteIdQuery(id!)

  if (isLoading) return <h3>Carregando...</h3>

  if (!restaurante) return <h3>Restaurante não encontrado</h3>

  return (
    <>
      <Modal />
      <HeaderPerfil />
      <Cart />
      <Banner
        categoria={restaurante.tipo}
        nome={restaurante.titulo}
        capa={restaurante.capa}
      />
      <FoodList foods={restaurante.cardapio} />
    </>
  )
}

export default Perfil
