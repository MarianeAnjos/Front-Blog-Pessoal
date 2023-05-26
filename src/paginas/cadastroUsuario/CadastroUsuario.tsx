import './CadastroUsuario.css';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>

            <Grid item xs={6} alignItems='center'>
                <Box padding={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastre-se</Typography>
                        <TextField id='nome' label='nome' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='usuario' name='usuario' margin='normal'  fullWidth />
                        <TextField id='senha' label='senha' name='senha' margin='normal'type='passaword' fullWidth />
                        <TextField id='confirmarSenha' label='confirmarSenha' name='confirmarSenha' margin='normal' fullWidth />
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