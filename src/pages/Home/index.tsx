import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) {
    return <div className="container"><h3>Carregando...</h3></div>
  }

  if (restaurantes) {
    return (
      <>
        <Header />
        <RestaurantList restaurantes={restaurantes} />
      </>
    )
  }

  return null
}

export default Home
