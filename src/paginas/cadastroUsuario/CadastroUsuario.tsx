import './CadastroUsuario.css';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import './CadastroUsuario.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { cadastroUsuario } from '../../services/Service';
import User from '../../models/User';

function CadastroUsuario() {
    const navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })
    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (user.senha.length >= 8) {
            if (confirmarSenha == user.senha) {
                try {
                    await cadastroUsuario("/usuarios/cadastrar", user, setUserResult);
                    alert("Usuário cadastrado com sucesso!")
                } catch (error) {
                    alert("Falha ao cadastrar usuário, verifique os campos")
                }
            } else {
                alert("Os campos de Senha e Confirmar Senha estão diferentes");
                setUser({ ...user, senha: "" });
                setConfirmarSenha("")
            }
        } else {
            alert("Os campos de Senha e Confirmar Senha precisam de, no mínimo, 8 caracteres");
            setUser({ ...user, senha: "" });
            setConfirmarSenha("")
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>

            <Grid item xs={6} alignItems='center'>
                <Box padding={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastre-se</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='nome' label='nome' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='usuario' label='usuario' name='usuario' margin='normal'  fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='senha' label='senha' name='senha' margin='normal'type='passaword' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' name='confirmarSenha' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario
