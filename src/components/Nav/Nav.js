import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Button,
    Typography
  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navDF: {
        flexGrow: 4,
        display: 'flex'
    },
    linkText: {
        color: '#fff',
        textDecoration: 'none'
    }
  }));

const navLinks = [
    {title:'Главная', path: '/main'},
    {title:'Контакты', path: '/contacts'},
    {title:'О нас', path: '/about'},
    {title:'Товары', path: '/products'},
    {title:'Прайс', path: '/price'},
    {title:'Марафон', path: '/go'},
]


function Nav() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h5" className={classes.title}>
                    Store
                </Typography>
                <List component="nav" aria-labelledby="main navigation" className={classes.navDF}>
                    {navLinks.map(({ title, path }) => (
                        <a href={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title}/>
                            </ListItem>
                        </a>
                    ))}
                </List>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Register</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
