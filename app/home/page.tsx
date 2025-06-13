import Banner from "@/components/Banner/Banner";
import Servico from "@/models/Servicos";
import Listas from "@/components/Listas/ListaCard";

const servicos: Servico[] = [
  {
    imagem:'/images/produtos.jpg',
    titulo:'Produtos',
    descricao:'Produtos para pets (ração, brinquedos, acessórios).',
    id:2
  },
  {
    imagem:'/images/adestramento.jpg',
    titulo:'Raças',
    descricao:'Informações e curiosidades sobre raças de cães e gatos.',
    id:3
  },
  {
    imagem:'/images/favoritos.jpg',
    titulo:'Favoritos',
    descricao:'Lista dos pets e produtos que o você favoritou.',
    id:4
  },
  {
    imagem:'/images/sobre.jpg',
    titulo:'Sobre Nós',
    descricao:'Informações sobre a loja, equipe e compromisso com a causa animal.',
    id:5
  },
]

export default function Home() {

	return (
    <>
      <Banner />
      <section className="container">
        <h2 className="tituloPrincipal">Nossos serviços</h2>
        <p className="paragrafo">
          Oferecemos uma ampla gama de produtos e serviços para animais de
          estimação, como alimentos, brinquedos, produtos de higiene e
          cuidados veterinários.
        </p>
        <Listas itens={servicos} />
      </section>
    </>
	);
}
