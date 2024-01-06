import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { margin } from '@mui/system';

const FilterBar: React.FC = () => {
    return(
        <div style={{margin:'150px 0px'}}>
        <Container>
            <ButtonGroup variant="text" aria-label="text button group" size='large'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>One</Button>
                <Button>Two</Button>
                <Button variant='contained'>Three</Button>
            </ButtonGroup>
        </Container>
        </div>
    )
}

export default FilterBar;
