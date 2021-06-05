import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { Link } from "react-router-dom";
import useStyles from './style';


type MenuListButtonProps = {
    key: string;
    to: string;
    title: string;
    icon: string;
    isActive: Boolean;
    setSelectedRote: () => void,
    onClick: () => void,
};

const MenuListButton = ({ key, to, title, icon, isActive, setSelectedRote, onClick }: MenuListButtonProps) => {
    const classes = useStyles();
    const theme = useTheme();

    const _onClick = () => {
        if (onClick) { onClick() }
        if (setSelectedRote) { setSelectedRote() }
    }

    return (<ListItem
        onClick={_onClick}
        className={classes.btnContainer}
        style={{ backgroundColor: isActive ? '#0BAC73' : "#2A75B4" }}
        button
        key={key}
        component={Link}
        to={to} >
        <ListItemIcon><Icon className={classes.iconWhite} >{icon}</Icon></ListItemIcon>
        <ListItemText primary={title} />
    </ListItem >);
}


export default MenuListButton;