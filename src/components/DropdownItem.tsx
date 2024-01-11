import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const optionsTime = ['Полный день', 'Гибкий график', 'Удаленная работа'];

const DropdownItem: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
return(
    <Button 
                    startIcon=''

                    aria-controls={open ? 'button-menu-time' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}>
                        {optionsTime[selectedIndex]}
                    </Button>
)
}

export default DropdownItem;