import styles from "./Home.module.scss";

import Servico from "@/models/Servicos";
import Banner from "@components/Banner";
import Listas from "@/components/Listas/ListaCard";

const servicos: Servico[] = [
  {
    imagem:'/images/adocao.jpg',
    titulo:'Adoção de Pets',
    paragrafo:'Encontre seu amigo mais próximo.',
    id:1
  },
  {
    imagem:'/images/produtos.jpg',
    titulo:'Produtos',
    paragrafo:'Produtos para pets (ração, brinquedos, acessórios).',
    id:2
  },
  {
    imagem:'/images/adestramento.jpg',
    titulo:'Raças',
    paragrafo:'Informações e curiosidades sobre raças de cães e gatos.',
    id:3
  },
  {
    imagem:'/images/favoritos.jpg',
    titulo:'Favoritos',
    paragrafo:'Lista dos pets e produtos que o você favoritou.',
    id:4
  },
  {
    imagem:'/images/sobre.jpg',
    titulo:'Sobre Nós',
    paragrafo:'Informações sobre a loja, equipe e compromisso com a causa animal.',
    id:5
  },
]

export default function Home() {
	return (
    <>
      <Banner />
      <section className="container">
        <h2 className="tituloPrincipal">Nossos serviços</h2>
        <p className={styles.paragrafo}>
          Oferecemos uma ampla gama de produtos e serviços para animais de
          estimação, como alimentos, brinquedos, produtos de higiene e
          cuidados veterinários.
        </p>
        <Listas itens={servicos} />
      </section>
    </>
	);
}
