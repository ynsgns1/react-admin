import React from 'react';
import useStyles from './style';
type HeaderProps = {
    title: string;
};
const Header = ({ title }: HeaderProps) => {
    const classes = useStyles();
    return (<h1 className={classes.title} >{title}</h1>);
}


export default Header;