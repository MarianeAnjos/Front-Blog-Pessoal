import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="texto">Siga-me nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            
                            <a href="https://www.linkedin.com/in/mariane-anjos-896479173/" target="_blank">
                                <LinkedInIcon className="redes"/>
                            </a>
                            <a href='https://github.com/MarianeAnjos' target="_blank">
                            <GitHubIcon className="redes"/> 
                            </a>
                        </Box>
                    </Box>
                    <Box className="caixa2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="texto" >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://github.com/MarianeAnjos?tab=repositories">
                                <Typography variant="subtitle2" gutterBottom className="texto" align="center" >mariane.anjos</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;