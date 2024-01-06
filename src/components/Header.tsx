import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.css';

const Header: React.FC = () => {
  const pages = [
    { name: 'Поиск вакансий', link: '/' },
    { name: 'Избранные вакансии', link: '/favorites' }
  ];

  const location = useLocation();

  return (
    <div >
      <AppBar elevation={0} color="default">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} display="flex">
              <Typography fontSize={20} color="black" fontWeight={700}>
                FRONTEND
              </Typography>

              <Typography 
              fontSize={20} 
              fontWeight={700}
              sx={{color:'#0070FB'}}>
                JOB
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  sx={{ fontWeight: 700, color: '#6B8397', margin: '0px 40px' }}
                  className={location.pathname == page.link ? s.active : ""}
                >
                  <Link 
                  to={page.link} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  className={location.pathname == page.link ? s.active : ""}
                  >
                    {page.name}
                  </Link>
                  
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
