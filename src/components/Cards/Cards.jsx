import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...'
    }
    const domains = [{
        name: "infected",
        value: confirmed.value,
        message: "Number of active cases of COVID-19"
    },
    {
        name: "recovered",
        value: recovered.value,
        message: "Number of recoveries from COVID-19"
    },
    {
        name: "deaths",
        value: deaths.value,
        message: "Number of deaths caused by COVID-19"
    }];
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                {domains.map((domain, index) => (<Grid key={index} item component={Card} xs={12} md={3} className={cx(styles.card, styles[domain.name])}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {domain.name.charAt(0).toUpperCase() + domain.name.slice(1)}
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={domain.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            {domain.message}

                        </Typography>
                    </CardContent>
                </Grid>))}

                {/* <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of recoveries from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of deaths caused by COVID-19
                        </Typography>
                    </CardContent>
                </Grid> */}
            </Grid>
        </div>
    )
}

export default Cards;