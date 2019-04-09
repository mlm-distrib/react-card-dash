import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import CartIcon from '@material-ui/icons/ShoppingCart';

const classes = {
    carticon: {
        marginLeft: -12
    }
}
const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className="" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit"><HomeIcon >Home</HomeIcon></Button>
                    <IconButton color="inherit" className={classes.carticon}>
                        <Badge badgeContent={4} color="secondary">
                            <CartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;