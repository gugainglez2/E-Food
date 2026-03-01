import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import ProductCard from '../../components/FoodCard'
import * as S from './styles'

const Perfil = () => (
  <>
    <HeaderPerfil />
    <Banner
      categoria="Italiana"
      nome="La Dolce Vita Trattoria"
      capa="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
    />
    <div className="container">
      <S.ListContainer>
        <ProductCard
          nome="Pizza Marguerita"
          foto="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
          descricao="A clássica pizza italiana com molho de tomate, mussarela de búfala e manjericão fresco."
        />
        <ProductCard
          nome="Pizza Marguerita"
          foto="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
          descricao="A clássica pizza italiana com molho de tomate, mussarela de búfala e manjericão fresco."
        />
        <ProductCard
          nome="Pizza Marguerita"
          foto="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
          descricao="A clássica pizza italiana com molho de tomate, mussarela de búfala e manjericão fresco."
        />
        <ProductCard
          nome="Pizza Marguerita"
          foto="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
          descricao="A clássica pizza italiana com molho de tomate, mussarela de búfala e manjericão fresco."
        />
      </S.ListContainer>
    </div>
  </>
)

export default Perfil
