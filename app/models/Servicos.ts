class Servico {
    titulo: string
    imagem:string
    id:number
    categoria?: string 
    descricao: string 
    preco?: string 

    constructor(
        titulo: string,
        descricao:string,
        imagem:string,
        id:number,
        categoria: string,
        preco: string

    ){
        this.titulo = titulo
        this.descricao = descricao
        this.imagem = imagem
        this.id = id
        this.categoria = categoria
        this.preco = preco
    }
}

export default Servico