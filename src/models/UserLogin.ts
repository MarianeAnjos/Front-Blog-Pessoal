export interface UserLogin{
    id: number;
    usuario: string;
    senha: string;
    token?: string| null;
}
