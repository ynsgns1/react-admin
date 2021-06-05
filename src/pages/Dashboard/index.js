import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router';
import { Container, LineChart, Doubleaxes } from '../../components';
import { Paper, makeStyles, Grid, } from '@material-ui/core';
import useStyles from './style';

function Dashboard() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0)
    return (<div>
        <Container
            title="Dashboard"
            selectedTab={selectedTab}
            setSelectedTab={(index) => setSelectedTab(index)}
            
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.chartContainer}>
                        <h2>Kullanıcı giriş/işlem istatistikleri</h2>
                        <LineChart />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.chartContainer}>
                        <h2>Kullanıcı giriş/işlem istatistikleri</h2>
                        <LineChart />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Paper className={classes.chartContainer}>
                        <h2>Kullanıcı istatistikleri</h2>
                        <Doubleaxes />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </div >)

}



export default withRouter(Dashboard);

