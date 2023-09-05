type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type transacaoMinuscula = { tipoTransacao: Lowercase<Carrinho["tipoTransacao"]> };

type Endereco = {
    endereco: {
        cep: string | number,
        rua: string,
        bairro: string,
        cidade: string,
        estado: string
    }
}

export type NovoCarrinho = Omit<Carrinho, "tipoTransacao"> & Endereco & transacaoMinuscula;