export interface Food {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  porcao: string;
  preco: number;
}

export interface Restaurante {
  id: number;
  titulo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  tipo: string;
  destacado: boolean;
  cardapio: Food[];
}
