import Banner from "@/components/Banner";
import { ListaProdutos } from "@/components/Listas";
import Servico from "@/models/Servicos";

const mock: Servico[] = [
    {
      id: 1,
      titulo: "Ração Premium para Cães",
      categoria: "Alimentos",
      preco: "89.90",
      descricao: "Ração premium com proteína de frango, para cães adultos de médio porte.",
      imagem: "/images/racao.jpg"
    },
    {
      id: 2,
      titulo: "Ração Úmida para Gatos",
      categoria: "Alimentos",
      preco: "4.50",
      descricao: "Sachê com alimento úmido enriquecido com vitaminas para gatinhos.",
      imagem: "/images/varias-racoes.jpg"
    },
    {
      id: 3,
      titulo: "Bola com Apito para Cães",
      categoria: "Brinquedos",
      preco: "14.90",
      descricao: "Brinquedo emborrachado com apito interno, ideal para cães ativos.",
      imagem: "/images/brinquedos.jpg"
    },
    {
      id: 4,
      titulo: "Arranhador de Papelão",
      categoria: "Brinquedos",
      preco: "34.90",
      descricao: "Arranhador ecológico para gatos com design compacto.",
      imagem: "/images/brinquedos.jpg"
    },
    {
      id: 5,
      titulo: "Shampoo Neutro",
      categoria: "Higiene",
      preco: "22.00",
      descricao: "Shampoo suave para cães e gatos, indicado para peles sensíveis.",
      imagem: "/images/brinquedos.jpg"

    },
    {
      id: 6,
      titulo: "Tapete Higiênico Lavável",
      categoria: "Higiene",
      preco: "59.90",
      descricao: "Tapete reutilizável para cães, fácil de lavar e secar.",
      imagem: "/images/brinquedos.jpg"

    },
    {
      id: 7,
      titulo: "Coleira Ajustável",
      categoria: "Acessórios",
      preco: "19.90",
      descricao: "Coleira com ajuste de tamanho, material resistente e confortável.",
      imagem: "/images/brinquedos.jpg"
    },
    {
      id: 8,
      titulo: "Comedouro Duplo Inox",
      categoria: "Acessórios",
      preco: "45.00",
      descricao: "Comedouro duplo em inox com base antiderrapante.",
      imagem: "/images/brinquedos.jpg"
    }
]

export default function Produtos() {

	return (
        <>
        <Banner />
        <section className="container">
          <h2 className="tituloPrincipal">Nossos produtos</h2>
          <p className="paragrafo">
            Oferecemos uma ampla gama de produtos e serviços para animais de
            estimação, como alimentos, brinquedos, produtos de higiene e
            cuidados veterinários.
          </p>
          <ListaProdutos itens={mock} />
        </section>
      </>
    )
}