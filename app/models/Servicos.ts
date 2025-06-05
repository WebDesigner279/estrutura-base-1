class Servico {
    titulo: string
    paragrafo:string
    imagem:string
    id:number

    constructor(
        titulo: string,
        paragrafo:string,
        imagem:string,
        id:number

    ){
        this.titulo = titulo
        this.paragrafo = paragrafo
        this.imagem = imagem
        this.id = id
    }
}

export default Servico