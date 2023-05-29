import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { api } from '../../services/Service';
import { UserLogin } from '../../models/UserLogin';
import './Login.css';

function Login() {
  const history = useNavigate();
  // history('/posts')
  const [token, setToken] = useLocalStorage('token');

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      usuario: '',
      senha: '',
      token: ''
    }
  )

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(
    () => {
      if (token != '') {
        history('/home')
      }
    }, [token])


  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const resposta = await api.post(`/usuarios/logar`, userLogin)
      setToken(resposta.data.token)

      alert('Usuario logado com sucesso!')
    } catch (error) {
      alert('Dados do usuário insoncistentes. Erro ao logar!')
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
            <TextField value={userLogin.usuario} id='usuario' label='usuario' name='usuario' margin='normal' fullWidth onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} />
            <TextField value={userLogin.senha} id='senha' label='senha' name='senha' margin='normal' type='password' fullWidth onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} />
            <Box marginTop={2} textAlign='center'>
              <Button type='submit' variant='contained' color='primary'>
                Logar
              </Button>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
            </Box>
            <Link to='/cadastroUsuario'>
              <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
            </Link>

          </Box>
        </Box>

      </Grid>
      <Grid xs={6} className='imagem'>
      </Grid>
    </Grid>

  )
}

export default Login