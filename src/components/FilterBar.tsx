import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { margin } from '@mui/system';
import TextField from '@mui/material/TextField';
import s from './FilterBar.module.css';
//import NearMeIcon from '@mui/icons-material/NearMe';

const FilterBar: React.FC = () => {
    const optionsTime = ['Полный день', 'Гибкий график', 'Удаленная работа'];
    const optionsWork = ['Полная занятость', 'Частичная занятость', 'Проектная работа', 'Стажировка'];
    const optionsExperience = ['Полный день', 'Гибкий график', 'Удаленная работа'];

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${optionsTime[selectedIndex]}`);
    };
    
    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
    if (
        anchorRef.current &&
        anchorRef.current.contains(event.target as HTMLElement)
    ) {
        return;
    }

    setOpen(false);
    };

    return(
        <div style={{margin:'150px 0px'}}>
        <Container>
            <ButtonGroup variant="text" aria-label="text button group" size='large' className={s.filterbar}>
                
                <Button >
                    <TextField variant="outlined" />
                </Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>One</Button>
                <Button>
                    <TextField variant="outlined" />
                </Button>
                <Button variant='contained'>Поиск</Button>
            </ButtonGroup>
        </Container>
        </div>
    )
}

export default FilterBar;
