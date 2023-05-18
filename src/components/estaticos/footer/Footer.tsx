import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-me nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            
                            <a href="https://www.linkedin.com/in/mariane-anjos-896479173/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href='https://github.com/MarianeAnjos' target="_blank">
                            <GitHubIcon style={{ fontSize: 50, color: "white" }}/> 
                            </a>
            
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://github.com/MarianeAnjos?tab=repositories">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">mariane.anjos</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;