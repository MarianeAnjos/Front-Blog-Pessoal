import axios from 'axios';

export const api = axios.create({
    baseURL:'https://blog-pessoal-6v3m.onrender.com'
})

export const login = async(url:any, dados:any, setDado:any ) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const cadastroUsuario = async(url:any, dados:any, setDado:any ) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

export const busca = async (url: any, setDados: any, header: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
  }
  
  export const buscaId = async (url: any, setDados: any, header: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
  }