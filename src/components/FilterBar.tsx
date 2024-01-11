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
import NearMeIcon from '@mui/icons-material/NearMe';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';

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
                    
                    <Button startIcon={<NearMeIcon />} >
                        <TextField variant="outlined" defaultValue='Москва'/>
                    </Button>
                    <Button 
                    startIcon={<AccessTimeFilledIcon />}

                    aria-controls={open ? 'button-menu-time' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}>
                        {optionsTime[selectedIndex]}
                    </Button>
                    <Button 
                    startIcon={<WorkIcon />}

                    aria-controls={open ? 'button-menu-time' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}>
                        {optionsWork[selectedIndex]}
                    </Button>
                    <Button startIcon={<StarIcon />}>One</Button>
                    <Button startIcon={<LocalOfferIcon />}>
                        <TextField variant="outlined" defaultValue='150000'/>
                    </Button>
                    <Button variant='contained'>Поиск</Button>
                </ButtonGroup>

                <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="button-menu-time" autoFocusItem>
                  {optionsTime.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
                </ClickAwayListener>
                
                <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="button-menu-work" autoFocusItem>
                  {optionsWork.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      
            </Container>
        </div>
    )
}

export default FilterBar;
