type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type UsuarioSemRG = Omit<Usuario, "rg">
type CamposObrigatórios = Required<UsuarioSemRG>

const cadastrarUsuário = (info: CamposObrigatórios): CamposObrigatórios => {
    return info;
}