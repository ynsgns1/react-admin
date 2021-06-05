import React from 'react'
import { Paper, makeStyles, Chip } from '@material-ui/core';
import { withRouter } from 'react-router';

import Header from '../Header';
import useStyles from './style';

type ContainerProps = {
    title: string;
    chipData: Array,
    setSelectedTab: (index: Number) => any,
    selectedTab: Number
};


function Container({ title, chipData, setSelectedTab, children, selectedTab }: ContainerProps) {
    const classes = useStyles();

    const handleChangeTab = (index) => {
        setSelectedTab(index);
    };


    return (<div>
        <Header title={title} />
        <Paper className={classes.root}>
            {chipData && <div className={classes.chipContainer}>
                {chipData.map((item, index) => <Chip
                    key={index}
                    // abel="Clickable"
                    color="secondary"
                    onClick={() => handleChangeTab(index)}
                    className={index == selectedTab ? classes.chipBtnActive : classes.chipBtn}
                    label={item} />
                )}
            </div>}
            <div >
                {children}
            </div>
        </Paper >

    </div >)

}

export default Container;
