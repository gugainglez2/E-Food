import Header from '../../components/Header'
import RestaurantList, { type Restaurante } from '../../components/RestaurantList'

const restaurantesFake: Restaurante[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    avaliacao: 4.8,
    descricao:
      'Peixes frescos e o autêntico sabor do Japão na sua casa. Pratos preparados com cuidado e tradição para garantir a melhor experiência gastronômica.',
    capa: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    descricao:
      'A autêntica culinária italiana. Massas frescas, molhos artesanais e ingredientes selecionados para trazer o sabor da Itália até você.',
    capa: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    infos: ['Italiana']
  },
  {
    id: 3,
    titulo: 'Heroes Burgers',
    avaliacao: 3.9,
    descricao:
      'Hambúrgueres artesanais com ingredientes de alta qualidade. Combinações criativas e saborosas para os amantes de um bom burger.',
    capa: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    infos: ['Reinauguração', 'Hamburgueria']
  }
]

const Home = () => (
  <>
    <Header />
    <div className="container">
      <RestaurantList restaurantes={restaurantesFake} />
    </div>
  </>
)

export default Home
