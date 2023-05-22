import React, { ChangeEvent, useEffect, useState } from 'react'
import './Login.css'
import {Grid, Box, Typography, TextField, Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { login } from '../../service/Service'
import { UsuarioLogin } from '../../models/UsuarioLogin'

function Login() {

    const history = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    function updateModel(event: ChangeEvent<HTMLInputElement>){
        setUsuarioLogin({
            ...usuarioLogin,
            [event.target.name]: event.target.value
        })
    }

    useEffect(()=>{
        if(token != ''){
            history('/home')
        }
    }, [token])

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        try{
            await login(`/usuarios/logar`, usuarioLogin, setToken)

            alert('Usuário logado com sucesso!');
        }catch(error)
        {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

  return (
    <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6} >
                <Box paddingX={20}>
                   
                    <form onSubmit={onSubmit}>
                      
                       <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1ex'>Login</Typography>
                        
                       <TextField value={usuarioLogin.usuario} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        
                       <TextField value={usuarioLogin.senha} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Login
                                </Button>
                        </Box>     

                    </form>

                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se Aqui!</Typography>
                            </Link>
                        </Box>

                </Box>
            </Grid>
            <Grid item xs={6} className='imagemLogin'></Grid>
        </Grid>
    </>
  )
}

export default Login