type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

const conexao = (dados: Conn) => {
    const { username, password, host, port, dbname } = dados;

    type objetoImutavel = Readonly<{ driver: string, url: string }>;

    const dadosDaConexao: objetoImutavel = {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    }

    return dadosDaConexao;
}