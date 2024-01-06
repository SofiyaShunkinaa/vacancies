import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import s from "./Header.module.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Header: React.FC = () => {
const pages = ['Поиск вакансий', 'Избранные вакансии'];


    return (
        <div >
            <AppBar 
            elevation={0}
            color="default">
                <Container>
                    <Toolbar>
                        <Box sx={{
                            flexGrow:1
                            }}
                            display="flex">
                            <Typography 
                            fontSize={20}
                            color="black"
                            fontWeight={700}
                            >
                                FRONTEND
                            </Typography>

                            <Typography 
                            fontSize={20}
                            color="primary"
                            fontWeight={700}
                            >
                                JOB
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 2}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{fontWeight:700, color:'#6B8397', margin:'0px 40px'}}
                            >
                                {page}
                            </Button>
                        ))}
                        </Box>
                        
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;
