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

type Endereco = {
    cep: number,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type NovoCarrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: Lowercase<"credito" | "debito">;
    cartao: Cartao,
    endereco: Endereco
}

type NovoCarrinho2 = Omit<Carrinho, "tipoTransacao"> & {
    endereco: Endereco,
    tipoTransacao: Lowercase<"credito" | "debito">;
}