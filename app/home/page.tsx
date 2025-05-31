import PetCard from "@/components/Card/PetCard";
import styles from "./Home.module.scss";

import Banner from "@components/Banner";
import Servico from "@/models/Servicos";
import Listas from "@/components/ListaCard/ListaCard";

const servicos: Servico[] = [
  {
    imagem:'/images/racoes.jpg',
    titulo:'Adoção de Pets',
    paragrafo:'Nutrição e sabor para alegrar o dia do seu pet!',
    id:1
  },
  {
    imagem:'/images/adestramento.jpg',
    titulo:'Adestramento',
    paragrafo:'Nutrição e sabor para alegrar o dia do seu pet!',
    id:2
  },
  {
    imagem:'/images/racoes.jpg',
    titulo:'Adoção de Pets',
    paragrafo:'Nutrição e sabor para alegrar o dia do seu pet!',
    id:3
  },
  {
    imagem:'/images/racoes.jpg',
    titulo:'Adoção de Pets',
    paragrafo:'Nutrição e sabor para alegrar o dia do seu pet!',
    id:4
  },
  {
    imagem:'/images/racoes.jpg',
    titulo:'Adoção de Pets',
    paragrafo:'Nutrição e sabor para alegrar o dia do seu pet!',
    id:5
  },
  {
    imagem:'/images/racoes.jpg',
    titulo:'Adoção de Pets',
    paragrafo:'Nutrição e sabor para alegrar o dia do seu pet!',
    id:6
  }
]

export default function Home() {
	return (
    <>
      <Banner />
      <section className={styles.home}>
        <h2 className={styles.titulo}>Nossos serviços</h2>
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
