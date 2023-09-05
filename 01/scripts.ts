type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type UsuarioSemRG = Omit<Usuario, "rg">;

export type UsuarioSemRGComCamposObrigatorios = Required<UsuarioSemRG>

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}
